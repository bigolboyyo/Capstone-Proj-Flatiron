class CharacterItemSerializer < ActiveModel::Serializer
  attributes :id, :character_id, :item_id, :item_name
end
