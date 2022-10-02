puts "Seeding..."

tablet = Item.create!(item_name: "Tablet")
phone = Item.create!(item_name: "Phone")
watch = Item.create!(item_name: "Watch")

pocket_knife = Item.create!(item_name: "Rusty Pocket Knife")

# Lawyer One ->
lawyer_init = StoryLine.create!(dialogue: "You awaken to a bright light. Your vision blurried and a loud ringing in your ears. As you sit up you feel the sand beneath your body. The grittiness and vision blur, swallowing up all of your awareness. After a minute of calibration you look around to see yourself in a desert, surrounded by broken machinery and sandy hills as far as the eyes can see in all directions.", storyline_img: "INSERT IMAGE lawyer")

# Choice two ->
lawyer_two = StoryLine.create!(dialogue: "What must be a few hours go by, as the sun starts setting, you notice a large scorpion, the size of baseball, scurrying in front of you. You can see the faint outline of the machinery far behind you. You realize how dehydrated you are as you notice a cactus a few feet past the scorpion.", storyline_img: "2nd lawyer image")
# Choice three ->
lawyer_three = StoryLine.create!(dialogue: "You decide to travel away from the setting sun. Leaving behind the machinery you begin moving. Not even 20 minutes go by, as you crest a hill you see a large jagged rock jutting from the ground. At this moment you start to feel faint vibrations beneath your feet. As the vibrations grow stronger, you notice shifting sands far ahead, seemingly approaching your position.", storyline_img: "Another vacant img")
# Choice four ->
lawyer_four = StoryLine.create!(dialogue: "SOOO COOOOL", storyline_img: "COOOLLLLL")
# Choice five ->
lawyer_five = StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")

law_six = StoryLine.create!(dialogue: "'Maybe it's a local!', you think to yourself. 'Finally some help. I don't know how I got here but when my firm hears about this we will rain hell down upon whoever put me here.' The vibrations grow stronger and the first thing you notice is the smell. The mustiness of an old damp basement mixed with the smell of a rotting corpse. The first thing you see, teeth. ", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
StoryLine.create!(dialogue: "Have fun keeping track of all of this", storyline_img: "mah brain")
law_ten_death = StoryLine.create!(dialogue: "You start sprinting again, but it was pointless. You were impatient and your flight senses took over. A monstrous, grotesque worm shoots up into the sky from beneath the sands, stopping right in front of you. The tremors knocking you to the ground. Towering stories above you. You look up and see it coming down on you, its teeth dripping with saliva. The smell, it overwhelms your senses.", storyline_img: "mah brain")

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

law_eleven = StoryLine.create!(dialogue: "You quickly sprint to the jagged rock formation. Climbing up on top of it the vibration is ever closer. From where you just came you notice what looks to be a small fox-like creature heading in your direction. The very ground beneath you shaking as if an earthquake, clearly no locals are near. A monstrous worm, the size of a building bursts from the sands. Quickly devouring the fox creature you had just seen, before diving back under the sands and heading away from the rocks you are on.", storyline_img: "AN IMG")
law_twelve = StoryLine.create!(dialogue: "Turning around in fear of the unknown you begin sprinting back the way you came. You see a small fox-like creature heading straight towards your direction. The shifting sands growing ever louder, the vibrations ever stronger.", storyline_img: "AN IMG")
law_thirteen = StoryLine.create!(dialogue: "You keep sprinting as you peak behind you. The quiet yelp of the fox is followed quickly by the sound of an avalanche of sand falling off the body of a giant worm. Seeing its teeth, each one the size of a car, you give it your all and keep moving. As you crest over the hill again you hear the sound of shifting sands getting further away. You keep moving until you arrive back, surrounded by the destroyed machinery.", storyline_img: "img")
law_fourteen = StoryLine.create!(dialogue: "You attempt to pick up the fox. Fearing for its life it quickly dashes between your legs and bites your ankle before running off. You recoil in pain, causing you to fall back down the hill towards the shifting sands. Unable to gain balance and the world spinning as you roll. You see the biggest worm you've ever seen launch itself from the sands in front of you. Teeth, dripping with saliva. It's going to eat you and still be hungry.", storyline_img: "death")
law_fifteen = StoryLine.create!(dialogue: "Hours go by. You can't stop crying and screaming. 'Jim and I just hosted the office party just yesterday... Jim, where are you Jim? All the while the sands shifting as the beast circles the rock formation, never relenting. In your absent mind, you don't notice the large scorpion crawl up onto your shoulder. You realize too late, it stabs it's stinger directly into your wrist. You smack it away, but within minutes your arm is blue and 3 times its size.", storyline_img: "death")
law_sixteen = StoryLine.create!(dialogue: "After the events from earlier you decide to get some rest and wait til the night comes. You see a huge piece of metal shrapnel sticking out of the sand, offering some decent shade. You decide to curl up and take a nap. Sometime later you awake to the sensation of your arm on fire. You look down and see it is blue and swollen to 3 times its size. You see a scorpion scurrying away.")
law_seventeen = StoryLine.create!(dialogue: "'No way am I heading out before I'm sure that beast is long gone.' So you wait quietly, not moving a muscle, and after about an hour. You see the shifting sands from the creature start heading back the way it came. Tired, dehdryated, and hungry it's time to make a decision.", storyline_img: "img")
law_eighteen = StoryLine.create!(dialogue: "Your patience paid off. You arrive back at the place you awoke earlier that day. You notice the broken machinery once again and the sun high in the sky. A piece of shade present from a large piece of scrap jutting from the sands. You realize how thirsty you are, but no water or food is in sight.", storyline_img: "img")
law_nineteen = StoryLine.create!(dialogue: "You decide to wait a little longer until the sun goes down. Might as well curl up on this rock where it's safe and take a nap. A slight crevice provides some shade and although you are thirsty, the fear of the worm keeps you stagnant. As you fall asleep you register a large scorpion scurrying across the sands far in front of you. You are tired though and pay it no mind. Next thing you know you jolt awake to an intense pain in your arm. The sun has gone down, but even with the lack of light you can tell your arm is 3 times its regular size and the pain is unbearable.", storyline_img: "img")
law_twenty = StoryLine.create!(dialogue: "`God I'm so tired, but I can't sleep and no way I'm leaving just yet`, you murmur to yourself. You decide to stay vigilant until the sun goes down. Staring off into the distance you enter a trance of sorts. Everything goes blurry and as the sun sets you truly realize how dehydrated you are. In a panic you realize you need water and start to head back the way you had came. Unfortunately before cresting the hill you fall over due to heat exhaustion. The shifting sands, the smell of death, and large sharp teeth are the last images you see as you stare back behind you in a daze.", storyline_img: "img")
law_twenty_one = StoryLine.create!(dialogue: "You decide to follow after the worm. 'Where the hell did that thing go, no way I'm turning back around' and you continue forth away from the sun. Without a warning as you crest the next dune the ground beneath you opens up. You step back in time but from below you see the beast rising from the ground. As the smell of blood and death overwhelms your senses you realize there is not much time to act.")
puts "Seeding completed!!!"
