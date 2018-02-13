class DateEntry < ApplicationRecord
  belongs_to :expert, required: false
  belongs_to :neighborhood

  validates :title, :spots, :neighborhood_id, presence: true
  #  The spot property is expected to be a string of spot_ids separated by spaces
end
