class StorySerializer < ActiveModel::Serializer
  attributes :id, :character_id, :starting_point, :current_story_line
end
