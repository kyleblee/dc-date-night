class DateEntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :cover_photo
  belongs_to :neighborhood
  belongs_to :expert
  has_many :spots
end
