class StoryLine < ApplicationRecord
  has_many :options
  has_many :stories, through: :options
end
