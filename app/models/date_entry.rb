class DateEntry < ApplicationRecord
  belongs_to :expert, required: false
  belongs_to :neighborhood
  has_many :date_entry_spots
  has_many :spots, through: :date_entry_spots

  has_attached_file :cover_photo, styles: {thumb: "100x100>"}, default_url: '/system/images/:style/default_date.png'
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\z/

  validates :title, :neighborhood_id, presence: true

  def self.browse_dates(neighborhood, cap)
    if neighborhood.empty?
      if cap
        DateEntry.all.order('created_at DESC').limit(cap)
      else
        DateEntry.all.order('created_at DESC')
      end
    else
      neighborhood_id = Neighborhood.find_by(name: neighborhood).id
      if cap
        DateEntry.all.where(neighborhood_id: neighborhood_id).order('created_at DESC').limit(cap)
      else
        DateEntry.all.where(neighborhood_id: neighborhood_id).order('created_at DESC')
      end
    end
  end

  def self.create_curated_date(params)
    neighborhood_id = Neighborhood.find_or_create_by(name: params[:neighborhood]).id

    @date = DateEntry.create(
      title: params[:title],
      description: params[:description],
      neighborhood_id: neighborhood_id,
      spots: params[:spots],
      save_spots_descriptions: params[:spots]
    )
  end

  def spots=(spots)
    spots.each do |spot|
      if !spot["title"].empty? && !spot["category"].empty?
        category = Category.find_by(name: spot["category"])
        @spot = Spot.find_or_create_by(
          name: spot["title"],
          category_id: category.id,
          neighborhood_id: self.neighborhood_id
        )
        self.spots << @spot
      end
    end
  end

  def save_spots_descriptions=(spots)
    descriptions = {}
    spots.each {|spot| descriptions[spot["title"]] = spot["description"]}
    self.spots_descriptions = descriptions.to_json
  end

  def update_curated_date(params)
    neighborhood_id = Neighborhood.find_by(name: params[:neighborhood]).id

    self.update(
      title: params[:title],
      description: params[:description],
      neighborhood_id: neighborhood_id,
      save_spots_descriptions: params[:spots]
    )

    self.update_date_spots(
      params[:spots],
      neighborhood_id
    )

    self
  end

  def update_date_spots(spots, neighborhood_id)
    # delete spots that have been removed via this form submission
    request_spot_ids = spots.collect {|spot| spot[:id]}
    request_spot_ids.delete(nil)
    self.spots.each do |spot|
      if !request_spot_ids.include?(spot.id)
        spot.destroy
      end
    end

    spots.each do |spot|
      if spot[:id]
        # make sure existing spots are updated
        category_id = Category.find_by(name: spot[:category]).id
        existing_spot = Spot.find_by(id: spot[:id])
        existing_spot.update(
          name: spot[:title],
          category_id: category_id,
          neighborhood_id: neighborhood_id
        )
      else
        # make sure new spots are created and pushed into date's spots
        category_id = Category.find_by(name: spot[:category]).id

        new_spot = Spot.create(
          name: spot[:title],
          description: spot[:description],
          category_id: category_id,
          neighborhood_id: neighborhood_id
        )

        self.spots << new_spot
      end
    end
  end

  def self.attach_photos(params)
    @date = DateEntry.find_by(id: params[:id].to_i)

    if params[:cover_photo] != "undefined"
      @date.update(cover_photo: params[:cover_photo])
    end

    @date.spots.each_with_index do |spot, index|
      if params[spot.id.to_s] && params[spot.id.to_s] != "undefined"
        spot.update(photo1: params[spot.id.to_s])
      end
    end
    @date
  end
end
