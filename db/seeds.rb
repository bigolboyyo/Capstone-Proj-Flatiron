puts "Seeding..."

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

puts "Seeding completed!!!"
