class Spot < ApplicationRecord
  belongs_to :neighborhood
  belongs_to :category
  has_many :date_entry_spots
  has_many :date_entries, through: :date_entry_spots

  validates :name, :category_id, :neighborhood_id, presence: true
end
