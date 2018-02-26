class DateEntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :cover_photo
  has_one :neighborhood
  has_many :spots
end
