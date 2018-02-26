class SpotSerializer < ActiveModel::Serializer
  attributes :name, :description, :photo1
  has_one :category
  belongs_to :neighborhood
end
