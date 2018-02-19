class Category < ApplicationRecord
  has_many :spots
  has_many :neighborhoods, through: :spots

  validates :name, presence: true

  def self.collect_relevant_categories(neighborhood)
    Neighborhood.find_by(name: neighborhood).categories
  end
end
