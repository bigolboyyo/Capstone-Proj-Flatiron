require "open-uri"

puts "Seeding..."

pocket_knife = Item.create!(item_name: "Rusty Pocket Knife")
memory_of_occult_symbol = Item.create!(item_name: "Memory of Hourglass Symbol")
robot_arm = Item.create!(item_name: "Robot Arm")

puts "items seeded..."

lawyer_init = StoryLine.create!(dialogue: "You awaken to a bright light. Your vision blurred and a loud ringing in your ears. As you sit up you feel the sand beneath your body. The grittiness and vision blur, swallowing up all of your awareness. After a minute of calibration you look around to see yourself in a desert, surrounded by broken machinery and sandy hills as far as the eyes can see in all directions.")
law_img_one = lawyer_init.parse_url("https://ik.imagekit.io/bigboyyo/broken_machines_eH3ErgNUT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665205761212")
lawyer_init.storyline_img.attach(io: law_img_one[0], filename: law_img_one[1])

lawyer_two = StoryLine.create!(dialogue: "What must be a few hours go by, as the sun starts setting, you notice a large scorpion, the size of baseball, scurrying in front of you. You can see the faint outline of the machinery far behind you. You realize how dehydrated you are as you notice a cactus a few feet past the scorpion.")
law_img_two = lawyer_init.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/lone_cactus_mgbLIvfiM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402513")
lawyer_two.storyline_img.attach(io: law_img_two[0], filename: law_img_two[1])

lawyer_three = StoryLine.create!(dialogue: "You decide to travel away from the setting sun. Leaving behind the machinery you begin moving. Not even 20 minutes go by, as you crest a hill you see a large jagged rock jutting from the ground. At this moment you start to feel faint vibrations beneath your feet. As the vibrations grow stronger, you notice shifting sands far ahead, seemingly approaching your position.")
law_img_three = lawyer_three.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/jagged_rocks_uHOkgX7T8.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402152")
lawyer_three.storyline_img.attach(io: law_img_three[0], filename: law_img_three[1])

# # Choice four -> examine machinery
lawyer_four = StoryLine.create!(dialogue: "Metal bits and pieces lay all around you. Cables and capacitors create an array of green, yellow, and red that stands out against the backdrop of sheet metal. You notice a couple erroded metal arms and legs amongst the scrap. Upon even closer inspection you notice what looks to be humanoid robot faces, worn down by the sands of time. 'Fucking robots, in the middle of the desert? Some terrorist operation huh, wait til the media hears about this.' you say out loud.")

# # Choice five -> examine yourself
lawyer_five = StoryLine.create!(dialogue: "You look down at your hands. They are filthy. You're in your trusty black suit that has won many a court cases alongside you. It's tattered and ragged now. 'How long was I out?' you ponder. Checking your pockets you find your pocket knife that Jim gave you a few years back as a birthday gift, except now it's all rusted. Other than some lint and your confusion, you find nothing else on you.")
law_img_five = lawyer_five.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/pocket_knife_44xG41RS-7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402594")
lawyer_five.storyline_img.attach(io: law_img_five[0], filename: law_img_five[1])

law_six = StoryLine.create!(dialogue: "'Maybe it's a local!', you think to yourself. 'Finally some help. I don't know how I got here but when my firm hears about this we will rain hell down upon whoever put me here.' The vibrations grow stronger and the first thing you notice is the smell. The mustiness of an old damp basement mixed with the smell of a rotting corpse. The first thing you see, the teeth.")

law_seven = StoryLine.create!(dialogue: "Using your rusty knife you slice open the top of the cactus and look inside. Water! Absolutely parched you sip out as much as you can filling your belly up for the time being. You feel refreshed and ready to keep venturing forth.")

law_eight = StoryLine.create!(dialogue: "You decide to head back the way you came. You arrive back to the place that you awoke. Bits of metal and wires laying all around. Huge piles of scrap and no one else in sight.")
law_img_eight = law_eight.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/scrap_pile_GftTgRWpm.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665271224955")
law_eight.storyline_img.attach(io: law_img_eight[0], filename: law_img_eight[1])

law_nine = StoryLine.create!(dialogue: "YOU LOST THE GAME (not this one, I mean 'THE GAME')")
law_img_nine = law_nine.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/troll_face__2uEKeTTH.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665271803984")
law_nine.storyline_img.attach(io: law_img_nine[0], filename: law_img_nine[1])

law_ten_death = StoryLine.create!(dialogue: "You start sprinting again, but it was pointless. You were impatient and your flight senses took over. A monstrous, grotesque worm shoots up into the sky from beneath the sands, stopping right in front of you. The tremors knocking you to the ground. Towering stories above you. You look up and see it coming down on you, its teeth dripping with saliva. The smell, it overwhelms your senses.")
law_ten_img = law_ten_death.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/worm_one_SrH_zuVKP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265403480")
law_ten_death.storyline_img.attach(io: law_ten_img[0], filename: law_ten_img[1])

vagrant_init = StoryLine.create!(dialogue: "This is the init for the VAGRANT Story!")

vagrant_twelve = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 2")
vagrant_thirteen = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 3")
vagrant_fourteen = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 4")
vagrant_fifteen = StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5")

StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5")
StoryLine.create!(dialogue: "Vagrant Dialogue numbah 5")

otaku_init = StoryLine.create!(dialogue: "This is the init for the OTAKU Story!")

otaku_twenty_two = StoryLine.create!(dialogue: "Otaku #2")
otaku_twenty_three = StoryLine.create!(dialogue: "Otaku #3")
otaku_twenty_four = StoryLine.create!(dialogue: "Otaku #4")
otaku_twenty_five = StoryLine.create!(dialogue: "Otaku #5")

StoryLine.create!(dialogue: "Otaku #5")
StoryLine.create!(dialogue: "Otaku #5")
StoryLine.create!(dialogue: "Otaku #5")
StoryLine.create!(dialogue: "Otaku #5")
StoryLine.create!(dialogue: "Otaku #ITEM")

law_eleven = StoryLine.create!(dialogue: "You quickly sprint to the jagged rock formation. Climbing up on top of it the vibration is ever closer. From where you just came you notice what looks to be a small fox-like creature heading in your direction. The very ground beneath you shaking as if an earthquake, clearly no locals are near. A monstrous worm, the size of a building bursts from the sands. Quickly devouring the fox creature you had just seen, before diving back under the sands and heading away from the rocks you are on.")
law_eleven_img = law_eleven.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/desert_fox_qeH0oiuf2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402032")
law_eleven.storyline_img.attach(io: law_eleven_img[0], filename: law_eleven_img[1])

law_twelve = StoryLine.create!(dialogue: "Turning around in fear of the unknown you begin sprinting back the way you came. You see a small fox-like creature heading straight towards your direction. The shifting sands growing ever louder, the vibrations ever stronger.")
law_img_twelve = law_twelve.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/desert_fox_approaching_B-osLF2gt.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665273193002")
law_twelve.storyline_img.attach(io: law_img_twelve[0], filename: law_img_twelve[1])

law_thirteen = StoryLine.create!(dialogue: "You keep sprinting as you peak behind you. The quiet yelp of the fox is followed quickly by the sound of an avalanche of sand falling off the body of a giant worm. Seeing its teeth, each one the size of a car, you give it your all and keep moving. As you crest over the hill again you hear the sound of shifting sands getting further away. You keep moving until you arrive back, surrounded by the destroyed machinery.")

law_fourteen = StoryLine.create!(dialogue: "You attempt to pick up the fox. Fearing for its life it quickly dashes between your legs and bites your ankle before running off. You recoil in pain, causing you to fall back down the hill towards the shifting sands. Unable to gain balance and the world spinning as you roll. You see the biggest worm you've ever seen launch itself from the sands in front of you. Teeth, dripping with saliva. It's going to eat you and still be hungry.")

law_fifteen = StoryLine.create!(dialogue: "Hours go by. You can't stop crying and screaming. 'Jim and I just hosted the office party just yesterday... Jim, where are you Jim? All the while the sands shifting as the beast circles the rock formation, never relenting. In your absent mind, you don't notice the large scorpion crawl up onto your shoulder. You realize too late, it stabs it's stinger directly into your wrist. You smack it away, but within minutes your arm is blue and 3 times its size.")
law_img_fifteen = law_fifteen.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/lawyer_manic_SHwGR92MS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265401730")
law_fifteen.storyline_img.attach(io: law_img_fifteen[0], filename: law_img_fifteen[1])

law_sixteen = StoryLine.create!(dialogue: "After the events from earlier you decide to get some rest and wait til the night comes. You see a huge piece of metal shrapnel sticking out of the sand, offering some decent shade. You decide to curl up and take a nap. Sometime later you awake to the sensation of your arm on fire. You look down and see it is blue and swollen to 3 times its size. You see a scorpion scurrying away.")

law_seventeen = StoryLine.create!(dialogue: "'No way am I heading out before I'm sure that beast is long gone.' So you wait quietly, not moving a muscle, and after about an hour. You see the shifting sands from the creature start heading back the way it came. Tired, dehdryated, and hungry it's time to make a decision.")

law_eighteen = StoryLine.create!(dialogue: "Your patience paid off. You arrive back at the place you awoke earlier that day. You notice the broken machinery once again and the sun high in the sky. A piece of shade present from a large piece of scrap jutting from the sands. You realize how thirsty you are, but no water or food is in sight.")
law_img_eighteen = law_eighteen.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/lawyer_lost_two_J3r31KvhC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402055")
law_eighteen.storyline_img.attach(io: law_img_eighteen[0], filename: law_img_eighteen[1])

law_nineteen = StoryLine.create!(dialogue: "You decide to wait a little longer until the sun goes down. Might as well curl up on this rock where it's safe and take a nap. A slight crevice provides some shade and although you are thirsty, the fear of the worm keeps you stagnant. As you fall asleep you register a large scorpion scurrying across the sands far in front of you. You are tired though and pay it no mind. Next thing you know you jolt awake to an intense pain in your arm. The sun has gone down, but even with the lack of light you can tell your arm is 3 times its regular size and the pain is unbearable.")

law_twenty = StoryLine.create!(dialogue: "`God I'm so tired, but I can't sleep and no way I'm leaving just yet`, you murmur to yourself. You decide to stay vigilant until the sun goes down. Staring off into the distance you enter a trance of sorts. Everything goes blurry and as the sun sets you truly realize how dehydrated you are. In a panic you realize you need water and start to head back the way you had came. Unfortunately before cresting the hill you fall over due to heat exhaustion. The shifting sands, the smell of death, and large sharp teeth are the last images you see as you stare back behind you in a daze.")
law_img_twenty = law_twenty.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/lawyer_lost_-nyv35UV0.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402423")
law_twenty.storyline_img.attach(io: law_img_twenty[0], filename: law_img_twenty[1])

law_twenty_one = StoryLine.create!(dialogue: "You decide to follow after the worm. 'Where the hell did that thing go, no way I'm turning back around' and you continue forth away from the sun. Without a warning as you crest the next dune the ground beneath you opens up. You step back in time but from below you see the beast rising from the ground. As the smell of blood and death overwhelms your senses you realize there is not much time to act.")
law_img_twenty_one = law_twenty_one.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/worm_hole_jdxQgzB8W.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665275811221")
law_twenty.storyline_img.attach(io: law_img_twenty_one[0], filename: law_img_twenty_one[1])

law_twenty_two = StoryLine.create!(dialogue: "Grabbing a piece of exposed wire you instantly feel an intensely painful and paralyzing shock throughout your entire body. You start convulsing as you fall to the ground under the desert sun.")
law_img_twenty_two = law_twenty_two.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/electric_shock_DNRe594LR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402347")
law_twenty_two.storyline_img.attach(io: law_img_twenty_two[0], filename: law_img_twenty_two[1])

law_twenty_three = StoryLine.create!(dialogue: "Suddenly as if some left leaning biased force of nature who creates text adventure stories was upset by the actions of an individual character created in its own mind spawns a giant hammer, as if straight from a Pink Floyd acid nightmare, and it appears above you and is coming down fast upon you with great force.")
law_img_twenty_three = law_twenty_three.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/hammer_death_cTLa8BOGp.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665276568249")
law_twenty_three.storyline_img.attach(io: law_img_twenty_three[0], filename: law_img_twenty_three[1])

law_twenty_four = StoryLine.create!(dialogue: "You begin pulling the exposed arms, legs, and metal skulls from the sand. They seem to be highly advanced tech that you've never encountered in your life, all broken and rusted with no symbols or lettering to clue you in to their origin. You get to an arm that seems a bit shinier and less rusted than the other pieces you've seen. You tug and feel weight behind it.")
law_img_twenty_four = law_twenty_four.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/robot_pile_ejyUPLijL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665265402629")
law_twenty_four.storyline_img.attach(io: law_img_twenty_four[0], filename: law_img_twenty_four[1])

law_twenty_five = StoryLine.create!(dialogue: "Pulling with all of your might you hear a crack and the arms rips off, causing whatever was beneath the sand to sink further underground. You stand holding this robotic arm with wires sticking out the end of the socket on one end and if by instinct you are grasping the fingers with your own.")

law_twenty_six = StoryLine.create!(dialogue: "`Stupid junk` you scream as you throw the arm off into a nearby pile. Standing there feeling confused you look around you noticing the colorful wires, setting sun, and giant piles of scrap metal.")

law_twenty_seven = StoryLine.create!(dialogue: "Upon closer inspection on the palm of the hand you notice a strange symbol. It looks to be an hourglass with 3 compartments. Some strange language etched in the middle of each compartment. You take the time to etch this is into your brain, it may be useful for describing what you've found here.")
law_img_twenty_seven = law_twenty_seven.parse_url("https://ik.imagekit.io/bigboyyo/ActiveImages/cult_symbol_HxkvIjc_y.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665276934274")
law_twenty_seven.storyline_img.attach(io: law_img_twenty_seven[0], filename: law_img_twenty_seven[1])

law_twenty_eight = StoryLine.create!(dialogue: "You realize you could use something to protect yourself. This arm is about the size of a baseball bat. You bet it'd get the job done in a pinch!")

law_twenty_nine = StoryLine.create!(dialogue: "You start sifting through the large pile of scrap metal. You smell a musk that reminds you of going hunting with your grandfather as a child. As you continue sifting through you notice little bits of red fur, various small rodent bones, and the sand is dug up a foot into the ground. This must be the nest of a small mammal. If they can survive here, that must mean there is food and water somewhere nearby.")

law_thirty = StoryLine.create!(dialogue: "'Yeah, I'm just gonna put this back and pretend it didn't just happen. Don't want any locals getting mad at me for breaking more of their stuff'.")
puts "Seeding completed!!!"
