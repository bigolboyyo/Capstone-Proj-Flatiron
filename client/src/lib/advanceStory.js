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
    console.log(charItems);
  };

  const actStoryId = JSON.parse(localStorage.getItem("user_data")).active_story
    .id;

  let option = {
    story_id: actStoryId,
    story_line_id: false,
  };

  //towards sun, no investigation
  if (id === "Choice One Followup" && activeChar.background === "lawyer") {
    nav = 2;
    option.story_line_id = nav;

    await postOption(option);
  }
  //away from sun
  if (id === "Choice Two Followup" && activeChar.background === "lawyer") {
    nav = 3;
    option.story_line_id = nav;

    await postOption(option);
  }
  //examine machinery
  if (id === "Choice Three Followup" && activeChar.background === "lawyer") {
    nav = 4;
    option.story_line_id = nav;

    await postOption(option);
  }
  //examine self
  if (id === "Choice Four Followup" && activeChar.background === "lawyer") {
    nav = 5;
    option.story_line_id = nav;

    await postOption(option);
    await takeItem("Rusty Pocket Knife");
  }
  //towards sun, keep walking
  if (id === "LawMan#2" && activeChar.background === "lawyer") {
    nav = 6;
    option.story_line_id = nav;

    await postOption(option);
  }
  //pick up scorpion
  if (id === "LawMan#3" && activeChar.background === "lawyer") {
    nav = 7;
    option.story_line_id = nav;

    await postOption(option);
  }
  //slice open cactus, needs to find rusty pocket knife
  if (id === "LawMan#4" && activeChar.background === "lawyer") {
    nav = 8;
    option.story_line_id = nav;

    await postOption(option);
  }
  //turn back around (fox encounter?)
  if (id === "LawMan#5" && activeChar.background === "lawyer") {
    nav = 9;
    option.story_line_id = nav;

    await postOption(option);
  }
  //running tremor death
  if (id === "AltTremorDeath" && activeChar.background === "lawyer") {
    nav = 10;
    option.story_line_id = nav;

    await postOption(option);
  }

  //approach the worm
  if (id === "LawMan#6" && activeChar.background === "lawyer") {
    nav = 6;
    option.story_line_id = nav;

    await postOption(option);
  }

  //worm encounter, jump on jagged rocks
  if (id === "LawMan#7" && activeChar.background === "lawyer") {
    nav = 31;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "LawMan#8" && activeChar.background === "lawyer") {
    nav = 32;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "PostWormReturn" && activeChar.background === "lawyer") {
    nav = 33;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "FoxBite" && activeChar.background === "lawyer") {
    nav = 34;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "ManicScorpionDeath" && activeChar.background === "lawyer") {
    nav = 35;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "SleepyScorpionDeath" && activeChar.background === "lawyer") {
    nav = 36;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "TremorPatience" && activeChar.background === "lawyer") {
    nav = 37;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "PostRockReturn" && activeChar.background === "lawyer") {
    nav = 38;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "SleepyScorpionDeathTwo" && activeChar.background === "lawyer") {
    nav = 39;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "WormWasPatient" && activeChar.background === "lawyer") {
    nav = 40;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "WormImpatience" && activeChar.background === "lawyer") {
    nav = 41;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "ElectricShockDeath" && activeChar.background === "lawyer") {
    nav = 42;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "BigotDeath" && activeChar.background === "lawyer") {
    nav = 43;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "RobotInspection" && activeChar.background === "lawyer") {
    nav = 44;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "ArmRipsOff" && activeChar.background === "lawyer") {
    nav = 45;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "PostArmThrown" && activeChar.background === "lawyer") {
    nav = 46;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "FindSymbolOfCult" && activeChar.background === "lawyer") {
    nav = 47;
    option.story_line_id = nav;
    await postOption(option);
    await takeItem("Memory of Hourglass Symbol");
  }

  if (id === "GainRobotArmWeapon" && activeChar.background === "lawyer") {
    nav = 48;
    option.story_line_id = nav;
    await postOption(option);
    await takeItem("Robot Arm");
  }

  if (id === "FindFoxDen" && activeChar.background === "lawyer") {
    nav = 49;
    option.story_line_id = nav;
    await postOption(option);
  }

  if (id === "Choice One Followup" && activeChar.background === "vagrant") {
    nav = 12;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Two Followup" && activeChar.background === "vagrant") {
    nav = 13;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Three Followup" && activeChar.background === "vagrant") {
    nav = 14;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Four Followup" && activeChar.background === "vagrant") {
    nav = 15;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "Crime#2" && activeChar.background === "vagrant") {
    nav = 16;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Crime#3" && activeChar.background === "vagrant") {
    nav = 17;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Crime#4" && activeChar.background === "vagrant") {
    nav = 18;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Crime#5" && activeChar.background === "vagrant") {
    nav = 19;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Crime#6" && activeChar.background === "vagrant") {
    nav = 20;
    option.story_line_id = nav;

    await postOption(option);
  }

  // if (id === "Crime#Item" && activeChar.background === "vagrant") {
  //   nav = 36;
  //   option.story_line_id = nav;
  //   await takeItem("Phone");
  //   await postOption(option);
  // }

  if (id === "Choice One Followup" && activeChar.background === "otaku") {
    nav = 22;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Two Followup" && activeChar.background === "otaku") {
    nav = 23;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Three Followup" && activeChar.background === "otaku") {
    nav = 24;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Four Followup" && activeChar.background === "otaku") {
    nav = 25;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Anime#2" && activeChar.background === "otaku") {
    nav = 26;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Anime#3" && activeChar.background === "otaku") {
    nav = 27;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Anime#4" && activeChar.background === "otaku") {
    nav = 28;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Anime#5" && activeChar.background === "otaku") {
    nav = 29;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Anime#6" && activeChar.background === "otaku") {
    nav = 30;
    option.story_line_id = nav;

    await postOption(option);
  }
  // if (id === "Anime#Item" && activeChar.background === "otaku") {
  //   nav = 41;
  //   option.story_line_id = nav;
  //   await takeItem("Watch");
  //   await postOption(option);
  // }
};
