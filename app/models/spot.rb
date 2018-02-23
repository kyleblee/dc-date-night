class Spot < ApplicationRecord
  belongs_to :neighborhood
  belongs_to :category
  has_many :date_entry_spots
  has_many :date_entries, through: :date_entry_spots

  has_attached_file :photo1, styles: {thumb: "100x100>"}, default_url: '/system/images/:style/spot_default.png'
  validates_attachment_content_type :photo1, content_type: /\Aimage\/.*\z/

  validates :name, :category_id, :neighborhood_id, presence: true

  def self.collect_date_spots(neighborhood, categories)
    date_spots = categories.collect do |category|
      # collect all spots that belong_to proper neighborhood and category
      potential_spots = Spot.select do |spot|
        spot.category.name == category && spot.neighborhood.name == neighborhood
      end

      if potential_spots.length > 0
        # randomly select and return one of the potential spots for this neighborhood and category
        potential_spots[rand(0..potential_spots.length - 1)]
      else
        # or, if no spot is found, then instantiate (but do not persist) a new spot as placeholder to throw error message on client-side
        category_id = Category.find_by(name: category).id
        neighborhood_id = Neighborhood.find_by(name: neighborhood).id
        Spot.new(
          name: "No spot found.",
          category_id: category_id,
          neighborhood_id: neighborhood_id
        )
      end
    end
    date_spots
  end
end
