puts "Seeding..."

# Lawyer One ->
lawyer_init = StoryLine.create!(dialogue: "This is the init for the LAWYER Story!", storyline_img: "INSERT IMAGE lawyer")

# Choice two ->
lawyer_two = StoryLine.create!(dialogue: "You have advanced to the 2nd lawyer storyline", storyline_img: "2nd lawyer image")
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
puts "Seeding completed!!!"
