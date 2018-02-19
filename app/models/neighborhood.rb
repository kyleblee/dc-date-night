class Neighborhood < ApplicationRecord
  has_many :spots
  has_many :categories, through: :spots

  validates :name, presence: true
  validates :name, uniqueness: true
end
