class OptionSerializer < ActiveModel::Serializer
  attributes :id, :story_id, :story_line_id
  has_many :choices
end
