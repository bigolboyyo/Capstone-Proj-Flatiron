class Character < ApplicationRecord
  belongs_to :user
  has_many :character_items
  has_many :items, through: :character_items
  alias_attribute :inventory, :items
  validates :character_name, :background, :user_id, presence: true
end
