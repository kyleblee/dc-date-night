class SpotSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :photo1
  has_one :category
  belongs_to :neighborhood
end
