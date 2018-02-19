class Category < ApplicationRecord
  has_many :spots

  validates :name, presence: true

  def self.collect_relevant_categories(neighborhood)
    binding.pry
    relevant_spots = Spot.select do |spot|
      spot.category.name == category && spot.neighborhood.name == neighborhood
    end
  end
end
