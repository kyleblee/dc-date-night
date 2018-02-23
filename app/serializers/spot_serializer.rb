class SpotSerializer < ActiveModel::Serializer
  attributes :name, :description, :photo1
  belongs_to :neighborhood
  belongs_to :category
end
