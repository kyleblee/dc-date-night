class DateEntry < ApplicationRecord
  belongs_to :expert
  belongs_to :neighborhood

  validates :title, :spots, :neighborhood_id, presence: true
end
