class DateEntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :cover_photo, :spots_descriptions, :expert_id
  has_one :neighborhood
  has_many :spots
end
