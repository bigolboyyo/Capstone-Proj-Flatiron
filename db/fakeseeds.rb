# If the character's story's starting point equals "vagrant/otaku/lawyer story line" I need to do the following...

#     - Set the starting storyline to be the first storyline referencing that background/starting point.
#       (could this be a controller method?) Something like, character.story.starting_point == "#{background}"

#     - Associate the created storylines (in the seed file) with the right starting reference

#     - Maybe the character has_one :story and not many as I currently have it. Will have to reset after game completion anyways

# Maybe create 3 objects that hold all the individual storylines?
# That way if starting point == "whatever" then map out the storylines with the associated objects storylines

# After character creation, that start button will set the FIRST STORYLINE based on the story.starting_point
# - This needs to be updated in Redux and the inital backend POST request

# Continue button will GET(maybe post?) the story.current_story_line.
# The backend will be updated only on a SAVE button (don't mess up!)
# Otherwise if never save, you would return to that original starting storyline
