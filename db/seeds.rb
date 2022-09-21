puts "Seeding..."

boyyo = User.create!(username: "BigBoyyo", password: "Password1!", password_confirmation: "Password1!")
robot = Character.create!(character_name: "LawMan", background: "lawyer", user_id: boyyo.id)

tablet = Item.create!(item_name: "Tablet")
phone = Item.create!(item_name: "Phone")

CharacterItem.create!(character_id: robot.id, item_id: tablet.id)
CharacterItem.create!(character_id: robot.id, item_id: phone.id)

robo_story = Story.create!(starting_point: "Lawyer Starting Point", character_id: robot.id)

starting_story_line = StoryLine.create!(dialogue: "You are starting the Robot Text Adventure!!!", storyline_img: "INSERT IMAGE HERE")

starting_option = Option.create!(story_id: robo_story.id, story_line_id: starting_story_line.id)

starting_choice_one = Choice.create!(option_id: starting_option.id, choice_text: "EAT")
starting_choice_two = Choice.create!(option_id: starting_option.id, choice_text: "SLEEP")
starting_choice_three = Choice.create!(option_id: starting_option.id, choice_text: "CODE")

puts "Seeding Completed!!!"
