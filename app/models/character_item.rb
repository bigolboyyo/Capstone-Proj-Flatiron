class CharacterItem < ApplicationRecord
  belongs_to :character
  belongs_to :item

  # Validates specific item uniqueness to character using active record

end
