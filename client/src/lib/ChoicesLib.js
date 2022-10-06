// const optID = JSON.parse(localStorage.getItem("options")).id;

const lawBatchTwo = {
  choice_one: {
    choice_text: "Keep walking",
    next_choice: "DemoEnd",
    //next nav: 6
  },

  choice_two: {
    choice_text: "Pick up the scorpion",
    next_choice: "ManicScorpionDeath",
    //next nav: 7
  },
  //ITEM
  choice_three: {
    choice_text: "Slice open the cactus",
    next_choice: "LawMan#4",
    //next nav: 8
  },
  choice_four: {
    choice_text: "Go back the way you came",
    next_choice: "LawMan#5",
    //next nav: 9
  },
};

const lawBatchThree = {
  choice_one: {
    choice_text: "Move closer to the shifting sands",
    next_choice: "LawMan#6",
  },
  choice_two: {
    choice_text: "Move to the jagged rock",
    next_choice: "LawMan#7",
  },
  choice_three: {
    choice_text: "Wait for whatever this is to approach",
    next_choice: "LawMan#6",
  },
  choice_four: {
    choice_text: "Run back the way you came",
    next_choice: "LawMan#8",
  },
};

const lawBatchFour = {
  choice_one: {
    choice_text: "Examine the machinery",
    next_choice: "Choice Three Followup",
  },
  choice_two: {
    choice_text: "Examine yourself",
    next_choice: "Choice Four Followup",
  },
  choice_three: {
    choice_text: "This time I'm walking towards the sun",
    next_choice: "Choice One Followup",
  },
  choice_four: {
    choice_text: "You're tired, curl up and nap under a big piece of metal",
    next_choice: "SleepyScorpionDeath",
  },
};

const lawBatchFive = {
  choice_one: {
    choice_text: "Scratch the sting",
    next_choice: "ScorpionDeath",
  },
  choice_two: {
    choice_text: "Try to suck out the venom",
    next_choice: "ScorpionDeath",
  },
  choice_three: {
    choice_text: "Start slicing arm off",
    next_choice: "ScorpionDeath",
  },
  choice_four: {
    choice_text: "Accept death, you're tired anyways",
    next_choice: "ScorpionDeath",
  },
};

const lawBatchSix = {
  choice_one: {
    choice_text: "Head back the way you came",
    next_choice: "PostRockReturn",
  },
  choice_two: {
    choice_text: "Take a nap, you're exhausted",
    next_choice: "SleepyScorpionDeathTwo",
  },
  choice_three: {
    choice_text: "Wait longer for the sun to go down",
    next_choice: "WormWasPatient",
  },
  choice_four: {
    choice_text: "Follow after the worm",
    next_choice: "WormImpatience",
  },
};

const lawBatchSeven = {
  choice_one: {
    choice_text: "Pick up a bundle of exposed wires",
    next_choice: "ElectricShockDeath",
  },
  choice_two: {
    choice_text: "Inspect the humanoid body parts",
    next_choice: "RobotInspection",
  },
  choice_three: {
    choice_text: "Sort through largest pile of scrap metal",
    next_choice: "FindFoxDen",
  },
  choice_four: {
    choice_text:
      "Complain out loud about how terrorist technology is advancing too fast",
    next_choice: "BigotDeath",
  },
};

//ElectricShockDeath
const lawBatchEight = {
  choice_one: {
    choice_text: "God Save Me",
    next_choice: "ElectricDeath",
  },
  choice_two: {
    choice_text: "Jim Save Me",
    next_choice: "ElectricDeath",
  },
  choice_three: {
    choice_text: "Remember your mother",
    next_choice: "ElectricDeath",
  },
  choice_four: {
    choice_text: "Focus on the sun's warmth",
    next_choice: "ElectricDeath",
  },
};

//Bigot Death
const lawBatchNine = {
  choice_one: {
    choice_text: "Scream for mercy",
    next_choice: "Bigoted",
  },
  choice_two: {
    choice_text: "Have faith in Capitalism",
    next_choice: "Bigoted",
  },
  choice_three: {
    choice_text: "Curse the irony",
    next_choice: "Bigoted",
  },
  choice_four: {
    choice_text: "Attempt to flee",
    next_choice: "Bigoted",
  },
};

//Tremor Death
const lawBatchTen = {
  choice_one: {
    choice_text: "Scream",
    next_choice: "TremorDeath",
  },
  choice_two: {
    choice_text: "Stay absolutely still",
    next_choice: "TremorDeath",
  },
  choice_three: {
    choice_text: "Attempt to flee",
    next_choice: "TremorDeath",
  },
  choice_four: {
    choice_text: "Pray to God",
    next_choice: "TremorDeath",
  },
};

//on the jagged rocks
const lawBatchEleven = {
  choice_one: {
    choice_text: "Immediately sprint away towards where the worm came",
    next_choice: "AltTremorDeath",
  },
  choice_two: {
    choice_text: "Better wait til I know it's gone",
    next_choice: "TremorPatience",
  },
  choice_three: {
    choice_text: "Sprint back towards the place you woke",
    next_choice: "AltTremorDeath",
  },
  choice_four: {
    choice_text: "Have a manic meltdown",
    next_choice: "ManicScorpionDeath",
  },
};

const lawBatchTwelve = {
  choice_one: {
    choice_text: "Attempt to pick up the fox",
    next_choice: "FoxBite",
  },
  choice_two: {
    choice_text: "Keep sprinting forward",
    next_choice: "PostWormReturn",
    //fox dies you arrive back where you awoke
  },
  choice_three: {
    choice_text: "Turn around to confront whatever is approaching",
    next_choice: "LawMan#6",
  },
  choice_four: {
    choice_text: "Change direction to jagged rocks",
    next_choice: "LawMan#7",
    //go atop the jagged rocks
  },
};

const lawBatchThirteen = {
  choice_one: {
    choice_text: "Pull with all of your strength",
    next_choice: "ArmRipsOff",
  },
  choice_two: {
    choice_text: "Ignore it and look through largest pile of scrap metal",
    next_choice: "FindFoxDen",
  },
  choice_three: {
    choice_text: "Ignore and start walking towards the sun",
    next_choice: "Choice One Followup",
  },
  choice_four: {
    choice_text: "Ignore and start walking away from the sun",
    next_choice: "Choice Two Followup",
  },
};

const lawBatchFourteen = {
  choice_one: {
    choice_text: "Throw the arm into a pile of scrap",
    next_choice: "PostArmThrown",
  },
  choice_two: {
    choice_text: "Investigate the arm further",
    next_choice: "FindSymbolOfCult",
  },
  choice_three: {
    choice_text: "This could be a decent weapon!",
    next_choice: "GainRobotArmWeapon",
  },
  choice_four: {
    choice_text:
      "Whoops... put the arm back in the sand as if you never touched it",
    next_choice: "PostArmPlaced",
  },
};

const lawBatchFifteen = {
  choice_one: {
    choice_text: "Pick up bundle of exposed wires",
    next_choice: "ElectricShockDeath",
  },
  choice_two: {
    choice_text: "Sort through largest pile of scrap metal",
    next_choice: "FindFoxDen",
  },
  choice_three: {
    choice_text: "Start walking towards the sun",
    next_choice: "Choice One Followup",
  },
  choice_four: {
    choice_text: "Start walking away from the sun",
    next_choice: "Choice Two Followup",
  },
};

const lawBatchSixteen = {
  choice_one: {
    choice_text: "Start Walking towards the sun",
    next_choice: "Choice One Followup",
  },
  choice_two: {
    choice_text: "Start walking away from the sun",
    next_choice: "Choice Two Followup",
  },
  choice_three: {
    choice_text: "This could be a decent weapon!",
    next_choice: "GainRobotArmWeapon",
  },
  choice_four: {
    choice_text: "Pick up bundle of exposed wires",
    next_choice: "ElectricShockDeath",
  },
};

const lawBatchSeventeen = {
  choice_one: {
    choice_text: "Start walking towards the sun",
    next_choice: "Choice One Followup",
  },
  choice_two: {
    choice_text: "Start walking away from the sun",
    next_choice: "Choice Two Followup",
  },
  choice_three: {
    choice_text: "Examine the machinery around you",
    next_choice: "Choice Three Followup",
  },
  choice_four: {
    choice_text: "You're tired, curl up and nap under a big piece of metal",
    next_choice: "SleepyScorpionDeath",
  },
};

const lawBatchEighteen = {
  choice_one: {
    choice_text: "Start walking towards the sun",
    next_choice: "Choice One Followup",
  },
  choice_two: {
    choice_text: "Start walking away from the sun",
    next_choice: "Choice Two Followup",
  },
  choice_three: {
    choice_text: "Pick up bundle of exposed wires",
    next_choice: "ElectricShockDeath",
  },
  choice_four: {
    choice_text: "You're tired, curl up and nap under a big piece of metal",
    next_choice: "SleepyScorpionDeath",
  },
};

const crimeBatchTwo = {
  choice_one: {
    choice_text: "CRIME",
    next_choice: "Crime#2",
  },
  choice_two: {
    choice_text: "VAGRANT",
    next_choice: "Crime#3",
  },
  choice_three: {
    choice_text: "STEAL",
    next_choice: "Crime#4",
  },
  choice_four: {
    choice_text: "LIE",
    next_choice: "Crime#5",
  },
};

const crimeBatchThree = {
  choice_one: {
    choice_text: "CRIME6",
    next_choice: "Crime#6",
  },
  choice_two: {
    choice_text: "CRIME7",
    next_choice: "Crime#7",
  },
  choice_three: {
    choice_text: "CRIME8",
    next_choice: "Crime#8",
  },
  choice_four: {
    choice_text: "CRIME9",
    next_choice: "Crime#9",
  },
};

const crimeBatchFour = {
  choice_one: {
    choice_text: "CRIME10",
    next_choice: "Crime#10",
  },
  choice_two: {
    choice_text: "CRIME11",
    next_choice: "Crime#11",
  },
  choice_three: {
    choice_text: "CRIME12",
    next_choice: "Crime#12",
  },
  choice_four: {
    choice_text: "CRIME13",
    next_choice: "Crime#13",
  },
};

const crimeBatchFive = {
  choice_one: {
    choice_text: "CRIME14",
    next_choice: "Crime#14",
  },
  choice_two: {
    choice_text: "CRIME15",
    next_choice: "Crime#15",
  },
  choice_three: {
    choice_text: "CRIME16",
    next_choice: "Crime#16",
  },
  choice_four: {
    choice_text: "CRIME17",
    next_choice: "Crime#17",
  },
};

const crimeBatchSix = {
  choice_one: {
    choice_text: "CRIME18",
    next_choice: "Crime#18",
  },
  choice_two: {
    choice_text: "CRIME19",
    next_choice: "Crime#19",
  },
  choice_three: {
    choice_text: "CRIME20",
    next_choice: "Crime#20",
  },
  choice_four: {
    choice_text: "CRIME21",
    next_choice: "Crime#21",
  },
};

const crimeBatchSeven = {
  choice_one: {
    choice_text: "CRIME22",
    next_choice: "Crime#22",
  },
  choice_two: {
    choice_text: "CRIME23",
    next_choice: "Crime#23",
  },
  choice_three: {
    choice_text: "CRIME24",
    next_choice: "Crime#24",
  },
  choice_four: {
    choice_text: "CRIME25",
    next_choice: "Crime#25",
  },
};

const crimeBatchEight = {
  choice_one: {
    choice_text: "CRIME26",
    next_choice: "Crime#26",
  },
  choice_two: {
    choice_text: "CRIME27",
    next_choice: "Crime#27",
  },
  choice_three: {
    choice_text: "CRIME28",
    next_choice: "Crime#28",
  },
  choice_four: {
    choice_text: "CRIME29",
    next_choice: "Crime#29",
  },
};

const crimeBatchNine = {
  choice_one: {
    choice_text: "CRIME30",
    next_choice: "Crime#30",
  },
  choice_two: {
    choice_text: "CRIME31",
    next_choice: "Crime#31",
  },
  choice_three: {
    choice_text: "CRIME32",
    next_choice: "Crime#32",
  },
  choice_four: {
    choice_text: "CRIME33",
    next_choice: "Crime#33",
  },
};

const crimeBatchTen = {
  choice_one: {
    choice_text: "Take item",
    next_choice: "Crime#Item",
  },
};

const animeBatchTwo = {
  choice_one: {
    choice_text: "Anime 2",
    next_choice: "Anime#2",
  },
  choice_two: {
    choice_text: "Anime 3",
    next_choice: "Anime#3",
  },
  choice_three: {
    choice_text: "Anime 4",
    next_choice: "Anime#4",
  },
  choice_four: {
    choice_text: "Anime 5",
    next_choice: "Anime#5",
  },
};

const animeBatchThree = {
  choice_one: {
    choice_text: "Move to item",
    next_choice: "Anime#6",
  },
  choice_two: {
    choice_text: "Anime 7",
    next_choice: "Anime#7",
  },
  choice_three: {
    choice_text: "Anime 8",
    next_choice: "Anime#8",
  },
  choice_four: {
    choice_text: "Anime 9",
    next_choice: "Anime#9",
  },
};

const animeBatchFour = {
  choice_one: {
    choice_text: "Anime 10",
    next_choice: "Anime#10",
  },
  choice_two: {
    choice_text: "Anime 11",
    next_choice: "Anime#11",
  },
  choice_three: {
    choice_text: "Anime 12",
    next_choice: "Anime#12",
  },
  choice_four: {
    choice_text: "Anime 13",
    next_choice: "Anime#13",
  },
};

const animeBatchFive = {
  choice_one: {
    choice_text: "Anime 14",
    next_choice: "Anime#14",
  },
  choice_two: {
    choice_text: "Anime 15",
    next_choice: "Anime#15",
  },
  choice_three: {
    choice_text: "Anime 16",
    next_choice: "Anime#16",
  },
  choice_four: {
    choice_text: "Anime 17",
    next_choice: "Anime#17",
  },
};

const animeBatchSix = {
  choice_one: {
    choice_text: "Watch anime",
    next_choice: "Anime#18",
  },
  choice_two: {
    choice_text: "Cry",
    next_choice: "Anime#19",
  },
  choice_three: {
    choice_text: "Buy figurine",
    next_choice: "Anime#20",
  },
  choice_four: {
    choice_text: "Be lonely",
    next_choice: "Anime#21",
  },
};

const animeBatchSeven = {
  choice_one: {
    choice_text: "Watch anime",
    next_choice: "Anime#22",
  },
  choice_two: {
    choice_text: "Cry",
    next_choice: "Anime#23",
  },
  choice_three: {
    choice_text: "Buy figurine",
    next_choice: "Anime#24",
  },
  choice_four: {
    choice_text: "Be lonely",
    next_choice: "Anime#25",
  },
};

const animeBatchEight = {
  choice_one: {
    choice_text: "Watch anime",
    next_choice: "Anime#26",
  },
  choice_two: {
    choice_text: "Cry",
    next_choice: "Anime#27",
  },
  choice_three: {
    choice_text: "Buy figurine",
    next_choice: "Anime#28",
  },
  choice_four: {
    choice_text: "Be lonely",
    next_choice: "Anime#29",
  },
};

const animeBatchNine = {
  choice_one: {
    choice_text: "Watch anime",
    next_choice: "Anime#30",
  },
  choice_two: {
    choice_text: "Cry",
    next_choice: "Anime#31",
  },
  choice_three: {
    choice_text: "Buy figurine",
    next_choice: "Anime#32",
  },
  choice_four: {
    choice_text: "Be lonely",
    next_choice: "Anime#33",
  },
};

const animeBatchTen = {
  choice_one: {
    choice_text: "Take Item",
    next_choice: "Anime#Item",
  },
};

export const choices = {
  laws_two: Object.values(Object.values(lawBatchTwo)),
  crimes_two: Object.values(Object.values(crimeBatchTwo)),
  animes_two: Object.values(Object.values(animeBatchTwo)),

  laws_three: Object.values(Object.values(lawBatchThree)),
  crimes_three: Object.values(Object.values(crimeBatchThree)),
  animes_three: Object.values(Object.values(animeBatchThree)),

  laws_four: Object.values(Object.values(lawBatchFour)),
  crimes_four: Object.values(Object.values(crimeBatchFour)),
  animes_four: Object.values(Object.values(animeBatchFour)),

  laws_five: Object.values(Object.values(lawBatchFive)),
  crimes_five: Object.values(Object.values(crimeBatchFive)),
  animes_five: Object.values(Object.values(animeBatchFive)),

  laws_six: Object.values(Object.values(lawBatchSix)),
  crimes_six: Object.values(Object.values(crimeBatchSix)),
  animes_six: Object.values(Object.values(animeBatchSix)),

  laws_seven: Object.values(Object.values(lawBatchSeven)),
  crimes_seven: Object.values(Object.values(crimeBatchSeven)),
  animes_seven: Object.values(Object.values(animeBatchSeven)),

  laws_eight: Object.values(Object.values(lawBatchEight)),
  crimes_eight: Object.values(Object.values(crimeBatchEight)),
  animes_eight: Object.values(Object.values(animeBatchEight)),

  laws_nine: Object.values(Object.values(lawBatchNine)),
  crimes_nine: Object.values(Object.values(crimeBatchNine)),
  animes_nine: Object.values(Object.values(animeBatchNine)),

  laws_ten: Object.values(Object.values(lawBatchTen)),
  crimes_ten: Object.values(Object.values(crimeBatchTen)),
  animes_ten: Object.values(Object.values(animeBatchTen)),

  laws_eleven: Object.values(Object.values(lawBatchEleven)),

  laws_twelve: Object.values(Object.values(lawBatchTwelve)),

  laws_thirteen: Object.values(Object.values(lawBatchThirteen)),

  laws_fourteen: Object.values(Object.values(lawBatchFourteen)),

  laws_fifteen: Object.values(Object.values(lawBatchFifteen)),

  laws_sixteen: Object.values(Object.values(lawBatchSixteen)),

  laws_seventeen: Object.values(Object.values(lawBatchSeventeen)),

  laws_eighteen: Object.values(Object.values(lawBatchEighteen)),
};
