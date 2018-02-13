class DateEntry < ApplicationRecord
  belongs_to :expert, required: false
  belongs_to :neighborhood
  has_many :date_entry_spots
  has_many :spots, through: :date_entry_spots

  validates :title, :neighborhood_id, presence: true
end
