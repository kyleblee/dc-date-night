class DateEntry < ApplicationRecord
  belongs_to :expert, required: false
  belongs_to :neighborhood
  has_many :date_entry_spots
  has_many :spots, through: :date_entry_spots

  validates :title, :neighborhood_id, presence: true

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
