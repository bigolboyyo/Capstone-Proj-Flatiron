class Story < ApplicationRecord
  belongs_to :character
  has_many :options
  has_many :story_lines, through: :options
end
