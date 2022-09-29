class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :character_name, :background

  has_many :character_items
end
