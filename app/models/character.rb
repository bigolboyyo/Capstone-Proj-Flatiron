class Character < ApplicationRecord
  belongs_to :user

  validates :character_name, :background, :user_id, presence: true
end
