class Option < ApplicationRecord
  belongs_to :story_line
  belongs_to :story
  has_many :choices, dependent: :destroy
end
