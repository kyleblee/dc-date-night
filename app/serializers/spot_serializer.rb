class SpotSerializer < ActiveModel::Serializer
  attributes :name, :description
  belongs_to :neighborhood
  belongs_to :category
end
