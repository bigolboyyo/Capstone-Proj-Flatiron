class Character < ApplicationRecord
  belongs_to :user
  has_many :character_items, dependent: :destroy
  has_many :items, through: :character_items
  alias_attribute :inventory, :items
  has_many :stories, dependent: :destroy
  validates :character_name, :background, :user_id, presence: true
end
