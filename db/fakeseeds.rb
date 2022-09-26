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

boyyo = User.create!(username: "BigBoyyo", password: "Password1!", password_confirmation: "Password1!")
robot = Character.create!(character_name: "LawMan", background: "lawyer", user_id: boyyo.id)

tablet = Item.create!(item_name: "Tablet")
phone = Item.create!(item_name: "Phone")

CharacterItem.create!(character_id: robot.id, item_id: tablet.id)
CharacterItem.create!(character_id: robot.id, item_id: phone.id)

robo_story = Story.create!(starting_point: "lawyer starting point", character_id: robot.id)

starting_story_line = StoryLine.create!(dialogue: "You are starting the Robot Text Adventure!!!", storyline_img: "INSERT IMAGE HERE")

starting_option = Option.create!(story_id: robo_story.id, story_line_id: starting_story_line.id)

starting_choice_one = Choice.create!(option_id: starting_option.id, choice_text: "EAT")

starting_choice_two = Choice.create!(option_id: starting_option.id, choice_text: "SLEEP")
starting_choice_three = Choice.create!(option_id: starting_option.id, choice_text: "CODE")
starting_choice_four = Choice.create!(option_id: starting_option.id, choice_text: "DRINK")

second_testing_line = StoryLine.create!(dialogue: "Wow you have advanced to the second dialogue!", storyline_img: "robot img")
second_option = Option.create!(story_id: robo_story.id, story_line_id: second_testing_line.id)
second_choice_one = Choice.create!(option_id: second_option.id, choice_text: "CRY")
second_choice_two = Choice.create!(option_id: second_option.id, choice_text: "CRY AGAIN")
second_choice_three = Choice.create!(option_id: second_option.id, choice_text: "SUCCEED")
second_choice_four = Choice.create!(option_id: second_option.id, choice_text: "KEEP CRYING")
third_testing_line = StoryLine.create!(dialogue: "This is the third dialogue", storyline_img: "A THIRD IMAGE WOOOO")
fourth_testing_line = StoryLine.create!(dialogue: "FOURTH DIALOGUE", storyline_img: "IMAGE NOT HURRR")
fifth_testing_line = StoryLine.create!(dialogue: "fifth DIALOGUE", storyline_img: "IMAGE NOT HURRR")
sixth_testing_line = StoryLine.create!(dialogue: "sixth DIALOGUE", storyline_img: "IMAGE NOT HURRRRRR")
seventh_testing_line = StoryLine.create!(dialogue: "seventh DIALOGUE", storyline_img: "IMAGE NOT HURRRRRRRRRRRRR")
eigth_testing_line = StoryLine.create!(dialogue: "8888888 DIALOGUE", storyline_img: "IMAGE NOT HURRRRRRRRRRRRRRRRRRR")
ninth_testing_line = StoryLine.create!(dialogue: "9 tho", storyline_img: "nintthhhh")

# break_everything = Choice.create!(option_id: second_option.id, choice_text: "B R E A K ")
