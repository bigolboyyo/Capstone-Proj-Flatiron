puts "Seeding..."

lawyer_init = StoryLine.create!(dialogue: "This is the init for the LAWYER Story!", storyline_img: "INSERT IMAGE lawyer")
vagrant_init = StoryLine.create!(dialogue: "This is the init for the VAGRANT Story!", storyline_img: "INSERT IMAGE vagrant")
otaku_init = StoryLine.create!(dialogue: "This is the init for the OTAKU Story!", storyline_img: "INSERT IMAGE otaku")

puts "Seeding completed!!!"
