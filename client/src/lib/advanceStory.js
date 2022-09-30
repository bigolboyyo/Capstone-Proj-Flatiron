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

  if (id === "Choice One Followup" && activeChar.background === "lawyer") {
    nav = 2;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Two Followup" && activeChar.background === "lawyer") {
    nav = 3;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Three Followup" && activeChar.background === "lawyer") {
    nav = 4;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "Choice Four Followup" && activeChar.background === "lawyer") {
    nav = 5;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "LawMan#2" && activeChar.background === "lawyer") {
    nav = 6;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "LawMan#3" && activeChar.background === "lawyer") {
    nav = 7;
    option.story_line_id = nav;

    await postOption(option);
  }
  if (id === "LawMan#4" && activeChar.background === "lawyer") {
    nav = 8;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "LawMan#5" && activeChar.background === "lawyer") {
    nav = 9;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "LawMan#6" && activeChar.background === "lawyer") {
    nav = 10;
    option.story_line_id = nav;

    await postOption(option);
  }

  if (id === "LawMan#Item" && activeChar.background === "lawyer") {
    nav = 31;
    option.story_line_id = nav;
    await takeItem("Tablet");

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

  if (id === "Crime#Item" && activeChar.background === "vagrant") {
    nav = 36;
    option.story_line_id = nav;
    await takeItem("Phone");
    await postOption(option);
  }

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
  if (id === "Anime#Item" && activeChar.background === "otaku") {
    nav = 41;
    option.story_line_id = nav;
    await takeItem("Watch");
    await postOption(option);
  }
};
