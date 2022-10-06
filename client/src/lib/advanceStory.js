const postOption = async (optionObj) => {
  const config = {
    method: "POST",
    body: JSON.stringify(optionObj),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const r = await fetch("/options", config);
  const postedOption = await r.json();
  localStorage.setItem("options", JSON.stringify(postedOption));
};

export const advanceStory = async (id, activeChar, nav) => {
  const takeItem = async (itemName) => {
    const item = JSON.parse(localStorage.getItem("items")).find(
      (i) => i.item_name === itemName
    );

    const config = {
      method: "POST",
      body: JSON.stringify({
        character_id: activeChar.id,
        item_id: item.id,
        item_name: item.item_name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const r = await fetch("/character_items", config);
    const charItems = await r.json();
    localStorage.setItem("char_inv", charItems);
  };

  const actStoryId = JSON.parse(localStorage.getItem("user_data")).active_story
    .id;

  let option = {
    story_id: actStoryId,
    story_line_id: false,
  };

  const activeCharCheck =
    activeChar.id ===
    JSON.parse(localStorage.getItem("user_data")).active_story.character_id;

  //towards sun, no investigation
  //ID IS CHOICE_ID
  if (id === "Choice One Followup" && activeCharCheck) {
    nav = 2;
    option.story_line_id = nav;

    await postOption(option);
  }
  //away from sun
  if (id === "Choice Two Followup" && activeCharCheck) {
    nav = 3;
    option.story_line_id = nav;

    await postOption(option);
  }
  //examine machinery
  if (id === "Choice Three Followup" && activeCharCheck) {
    nav = 4;
    option.story_line_id = nav;

    await postOption(option);
  }
  //examine self
  if (id === "Choice Four Followup" && activeCharCheck) {
    nav = 5;
    option.story_line_id = nav;

    await postOption(option);
    await takeItem("Rusty Pocket Knife");
  }
  //towards sun, keep walking
  if (id === "LawMan#2" && activeCharCheck) {
    nav = 6;
    option.story_line_id = nav;

    await postOption(option);
  }
  //pick up scorpion
  if (id === "LawMan#3" && activeCharCheck) {
    nav = 7;
    option.story_line_id = nav;

    await postOption(option);
  }
  //slice open cactus, needs to find rusty pocket knife
  if (id === "LawMan#4" && activeCharCheck) {
    nav = 8;
    option.story_line_id = nav;

    await postOption(option);
  }
  //turn back around (fox encounter?)
  if (id === "LawMan#5" && activeCharCheck) {
    nav = 9;
    option.story_line_id = nav;

    await postOption(option);
  }
  //running tremor death
  if (id === "AltTremorDeath" && activeCharCheck) {
    nav = 10;
    option.story_line_id = nav;

    await postOption(option);
  }

  //approach the worm
  if (id === "LawMan#6" && activeCharCheck) {
    nav = 6;
    option.story_line_id = nav;

    await postOption(option);
  }

  //worm encounter, jump on jagged rocks
  if (id === "LawMan#7" && activeCharCheck) {
    nav = 31;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "LawMan#8" && activeCharCheck) {
    nav = 32;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "PostWormReturn" && activeCharCheck) {
    nav = 33;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "FoxBite" && activeCharCheck) {
    nav = 34;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "ManicScorpionDeath" && activeCharCheck) {
    nav = 35;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "SleepyScorpionDeath" && activeCharCheck) {
    nav = 36;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "TremorPatience" && activeCharCheck) {
    nav = 37;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "PostRockReturn" && activeCharCheck) {
    nav = 38;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "SleepyScorpionDeathTwo" && activeCharCheck) {
    nav = 39;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "WormWasPatient" && activeCharCheck) {
    nav = 40;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "WormImpatience" && activeCharCheck) {
    nav = 41;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "ElectricShockDeath" && activeCharCheck) {
    nav = 42;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "BigotDeath" && activeCharCheck) {
    nav = 43;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "RobotInspection" && activeCharCheck) {
    nav = 44;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "ArmRipsOff" && activeCharCheck) {
    nav = 45;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "PostArmThrown" && activeCharCheck) {
    nav = 46;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "FindSymbolOfCult" && activeCharCheck) {
    nav = 47;
    option.story_line_id = nav;
    await postOption(option);
    await takeItem("Memory of Hourglass Symbol");
  }

  if (id === "GainRobotArmWeapon" && activeCharCheck) {
    nav = 48;
    option.story_line_id = nav;
    await postOption(option);
    await takeItem("Robot Arm");
  }

  if (id === "FindFoxDen" && activeCharCheck) {
    nav = 49;
    option.story_line_id = nav;
    await postOption(option);
  }
  if (id === "DemoEnd" && activeCharCheck) {
    nav = 666;
    option.story_line_id = nav;
    await postOption(option);
  }

  // if (id === "Choice One Followup" && activeCharCheck) {
  //   nav = 12;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Choice Two Followup" && activeCharCheck) {
  //   nav = 13;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Choice Three Followup" && activeCharCheck) {
  //   nav = 14;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Choice Four Followup" && activeCharCheck) {
  //   nav = 15;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }

  // if (id === "Crime#2" && activeCharCheck) {
  //   nav = 16;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Crime#3" && activeCharCheck) {
  //   nav = 17;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Crime#4" && activeCharCheck) {
  //   nav = 18;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Crime#5" && activeCharCheck) {
  //   nav = 19;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Crime#6" && activeCharCheck) {
  //   nav = 20;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }

  // // if (id === "Crime#Item" && activeCharCheck) {
  // //   nav = 36;
  // //   option.story_line_id = nav;
  // //   await takeItem("Phone");
  // //   await postOption(option);
  // // }

  // if (id === "Choice One Followup" && activeCharCheck) {
  //   nav = 22;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Choice Two Followup" && activeCharCheck) {
  //   nav = 23;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Choice Three Followup" && activeCharCheck) {
  //   nav = 24;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Choice Four Followup" && activeCharCheck) {
  //   nav = 25;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Anime#2" && activeCharCheck) {
  //   nav = 26;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Anime#3" && activeCharCheck) {
  //   nav = 27;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Anime#4" && activeCharCheck) {
  //   nav = 28;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Anime#5" && activeCharCheck) {
  //   nav = 29;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
  // if (id === "Anime#6" && activeCharCheck) {
  //   nav = 30;
  //   option.story_line_id = nav;

  //   await postOption(option);
  // }
};
