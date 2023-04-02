class StoryLineSerializer < ActiveModel::Serializer
  attributes :id, :dialogue, :storyline_img

  has_many :options
  has_many :choices
end
