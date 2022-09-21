class StorySerializer < ActiveModel::Serializer
  attributes :id
  has_many :options
end
