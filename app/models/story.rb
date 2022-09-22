class Story < ApplicationRecord
  belongs_to :character
  has_many :options
  has_many :story_lines, through: :options
  has_many :choices, through: :options
end
