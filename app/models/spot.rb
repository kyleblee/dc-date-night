class Spot < ApplicationRecord
  belongs_to :neighborhood
  belongs_to :category

  validates :name, :category_id, :neighborhood_id, presence: true
end
