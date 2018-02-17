class Neighborhood < ApplicationRecord
  has_many :spots

  validates :name, presence: true
  validates :name, uniqueness: true
end
