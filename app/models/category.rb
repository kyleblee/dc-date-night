class Category < ApplicationRecord
  has_many :spots
  has_many :neighborhoods, through: :spots

  validates :name, presence: true

  def self.collect_relevant_categories(neighborhood)
    if neighborhood.empty?
      Category.all
    else
      Neighborhood.find_by(name: neighborhood).categories.uniq
    end
  end
end
