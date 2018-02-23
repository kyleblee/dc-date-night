class DateEntry < ApplicationRecord
  belongs_to :expert, required: false
  belongs_to :neighborhood
  has_many :date_entry_spots
  has_many :spots, through: :date_entry_spots

  has_attached_file :cover_photo, styles: {thumb: "100x100>"}, default_url: '/system/images/:style/default_date.png'
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\z/

  validates :title, :neighborhood_id, presence: true

  def self.browse_dates(neighborhood)
    if neighborhood.empty?
      DateEntry.all.order('created_at DESC')
    else
      dates = DateEntry.all.select do |date|
        date.neighborhood.name == neighborhood
      end
      neighborhood_id = Neighborhood.find_by(name: neighborhood).id
      DateEntry.all.where(neighborhood_id: neighborhood_id).order('created_at DESC')
    end
  end

  def self.create_curated_date(params)
    neighborhood_id = Neighborhood.find_or_create_by(name: params[:neighborhood]).id

    @date = DateEntry.create(
      title: params[:title],
      description: params[:description],
      neighborhood_id: neighborhood_id,
      spots: params[:spots]
    )
  end

  def spots=(spots)
    spots.each do |spot|
      if !spot["title"].empty? && !spot["description"].empty? && !spot["category"].empty?
        category = Category.find_by(name: spot["category"])
        @spot = Spot.find_or_create_by(
          name: spot["title"],
          description: spot["description"],
          category_id: category.id,
          neighborhood_id: self.neighborhood_id
        )
        self.spots << @spot
      end
    end
  end
end
