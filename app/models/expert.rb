class Expert < ApplicationRecord
  has_many :date_entries

  validates :name, presence: true
end
