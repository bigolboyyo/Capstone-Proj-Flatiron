class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name
  has_one :background
end
