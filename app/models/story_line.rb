class StoryLine < ApplicationRecord
  has_many :options
  has_many :stories, through: :options
  has_many :choices, through: :options
end
