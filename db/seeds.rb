puts "Seeding..."

tablet = Item.create!(item_name: "Tablet")
phone = Item.create!(item_name: "Phone")
watch = Item.create!(item_name: "Watch")

pocket_knife = Item.create!(item_name: "Rusty Pocket Knife")

# Lawyer One ->
lawyer_init = StoryLine.create!(dialogue: "You awaken to a bright light. Your vision blurried and a loud ringing in your ears. As you sit up you feel the sand beneath your body. The grittiness and vision blur, swallowing up all of your awareness. After a minute of calibration you look around to see yourself in a desert, surrounded by broken machinery and sandy hills as far as the eyes can see in all directions.", storyline_img: "INSERT IMAGE lawyer")

# Choice two ->
lawyer_two = StoryLine.create!(dialogue: "What must be a few hours go by, as the sun starts setting, you notice a large scorpion, the size of baseball, scurrying in front of you. You can see the faint outline of the machinery far behind you. You wonder why you don't feel thirsty as you see a cactus a few feet past the scorpion.", storyline_img: "2nd lawyer image")
# Choice three ->
lawyer_three = StoryLine.create!(dialogue: "Wow you advanced based on an option picked!", storyline_img: "Another vacant img")
# Choice four ->
lawyer_four = StoryLine.create!(dialogue: "SOOO COOOOL", storyline_img: "COOOLLLLL")
# Choice five ->
lawyer_five = StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")

StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")

# Lawyer Eleven
vagrant_init = StoryLine.create!(dialogue: "This is the init for the VAGRANT Story!", storyline_img: "INSERT IMAGE vagrant")

# Choice twelve ->
vagrant_twelve = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 2", storyline_img: "AN IMG")
# Choice thirteen ->
vagrant_thirteen = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 3", storyline_img: "AN IMG")
# Choice fourteen ->
vagrant_fourteen = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 4", storyline_img: "AN IMG")
# Choice fifteen ->
vagrant_fifteen = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5", storyline_img: "AN IMG")

StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5", storyline_img: "AN IMG")

# Otaku twenty-one ->
otaku_init = StoryLine.create!(dialogue: "This is the init for the OTAKU Story!", storyline_img: "INSERT IMAGE otaku")

# Choice twenty-two
otaku_twenty_two = StoryLine.create!(dialogue: "Otaku #2", storyline_img: "AN IMG")
otaku_twenty_three = StoryLine.create!(dialogue: "Otaku #3", storyline_img: "AN IMG")
otaku_twenty_four = StoryLine.create!(dialogue: "Otaku #4", storyline_img: "AN IMG")
otaku_twenty_five = StoryLine.create!(dialogue: "Otaku #5", storyline_img: "AN IMG")

StoryLine.create!(dialogue: "Otaku #5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Otaku #5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Otaku #5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Otaku #5", storyline_img: "AN IMG")
StoryLine.create!(dialogue: "Otaku #ITEM", storyline_img: "AN IMG")

lawyer_item_one_grabbed = StoryLine.create!(dialogue: "You have an item!", storyline_img: "AN IMG")

puts "Seeding completed!!!"
