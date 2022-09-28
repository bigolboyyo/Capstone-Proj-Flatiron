import React, { useEffect } from "react";
// , { useEffect, useState }
import Dialogue from "../Dialogue/Dialogue";
import Option from "../Option/Option";
import "../StoryLinePage/Storyline.css";
import { useSelector } from "react-redux";
import {
  setActiveStory,
  setActiveStoryLine,
  grabAllStories,
} from "../../features/user/userSlice";
import { setOptionStoryLine } from "../../features/optionSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function Storyline() {
  // robo_story = Story.create!(starting_point: "lawyer starting point", character_id: robot.id)

  // starting_story_line = StoryLine.create!(dialogue: "You are starting the Robot Text Adventure!!!", storyline_img: "INSERT IMAGE HERE")

  // starting_option = Option.create!(story_id: robo_story.id, story_line_id: starting_story_line.id)

  // starting_choice_one = Choice.create!(option_id: starting_option.id, choice_text: "EAT")

  //FIXME:
  // How can I associate hard coded storylines with newly created options/choices?

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const activeChar = useSelector((state) => state.user.active_character);
  console.log(activeChar);

  const activeStory = useSelector((state) => state.user.active_story);
  console.log(activeStory);

  const reduxStories = useSelector((state) => state.user.all_stories);
  const localStories = JSON.parse(localStorage.getItem("stories"));
  const stories = reduxStories ? reduxStories : localStories;
  // const actStory = useSelector((state) => state.user.active_story);

  const reduxStoryLine = useSelector((state) => state.user.current_storyline);
  const localStoryLine = JSON.parse(
    JSON.parse(localStorage.getItem("user_data")).current_storyline
  );

  const actStoryLine = reduxStoryLine ? reduxStoryLine : localStoryLine;

  const storyLine = stories.find((s) => s.id === actStoryLine);

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

  const postChoices = async (choiceObj) => {
    const config = {
      method: "POST",
      body: JSON.stringify(choiceObj),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const r = await fetch("/choices", config);
    const postedChoices = await r.json();
    console.log(postedChoices);
  };

  const choiceCreation = async (background, option) => {
    const options = JSON.parse(localStorage.getItem("options"));
    const optID = options.id;
    const navID = option.story_line_id;

    const lawBatchTwo = {
      choice_one: {
        option_id: optID,
        choice_text: "LAWMAN",
        next_choice: "LawMan#2",
      },
      choice_two: {
        option_id: optID,
        choice_text: "LAWBRO",
        next_choice: "LawMan#3",
      },
      choice_three: {
        option_id: optID,
        choice_text: "LAWDUDE",
        next_choice: "LawMan#4",
      },
      choice_four: {
        option_id: optID,
        choice_text: "LAWGUY",
        next_choice: "LawMan#5",
      },
    };

    const lawBatchThree = {
      choice_one: {
        option_id: optID,
        choice_text: "law6",
        next_choice: "LawMan#6",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law7",
        next_choice: "LawMan#7",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law8",
        next_choice: "LawMan#8",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law9",
        next_choice: "LawMan#9",
      },
    };

    const lawBatchFour = {
      choice_one: {
        option_id: optID,
        choice_text: "law10",
        next_choice: "LawMan#10",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law11",
        next_choice: "LawMan#11",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law12",
        next_choice: "LawMan#12",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law13",
        next_choice: "LawMan#13",
      },
    };

    const lawBatchFive = {
      choice_one: {
        option_id: optID,
        choice_text: "law14",
        next_choice: "LawMan#14",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law15",
        next_choice: "LawMan#15",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law16",
        next_choice: "LawMan#16",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law17",
        next_choice: "LawMan#17",
      },
    };

    const lawBatchSix = {
      choice_one: {
        option_id: optID,
        choice_text: "law18",
        next_choice: "LawMan#18",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law19",
        next_choice: "LawMan#19",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law20",
        next_choice: "LawMan#20",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law21",
        next_choice: "LawMan#21",
      },
    };

    const lawBatchSeven = {
      choice_one: {
        option_id: optID,
        choice_text: "law22",
        next_choice: "LawMan#22",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law23",
        next_choice: "LawMan#23",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law24",
        next_choice: "LawMan#24",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law25",
        next_choice: "LawMan#25",
      },
    };

    const lawBatchEight = {
      choice_one: {
        option_id: optID,
        choice_text: "law26",
        next_choice: "LawMan#26",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law27",
        next_choice: "LawMan#27",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law28",
        next_choice: "LawMan#28",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law29",
        next_choice: "LawMan#29",
      },
    };

    const lawBatchNine = {
      choice_one: {
        option_id: optID,
        choice_text: "law30",
        next_choice: "LawMan#30",
      },
      choice_two: {
        option_id: optID,
        choice_text: "law31",
        next_choice: "LawMan#31",
      },
      choice_three: {
        option_id: optID,
        choice_text: "law32",
        next_choice: "LawMan#32",
      },
      choice_four: {
        option_id: optID,
        choice_text: "law33",
        next_choice: "LawMan#33",
      },
    };

    const crimeBatchTwo = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME",
        next_choice: "Crime#2",
      },
      choice_two: {
        option_id: optID,
        choice_text: "VAGRANT",
        next_choice: "Crime#3",
      },
      choice_three: {
        option_id: optID,
        choice_text: "STEAL",
        next_choice: "Crime#4",
      },
      choice_four: {
        option_id: optID,
        choice_text: "LIE",
        next_choice: "Crime#5",
      },
    };

    const crimeBatchThree = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME6",
        next_choice: "Crime#6",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME7",
        next_choice: "Crime#7",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME8",
        next_choice: "Crime#8",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME9",
        next_choice: "Crime#9",
      },
    };

    const crimeBatchFour = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME10",
        next_choice: "Crime#10",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME11",
        next_choice: "Crime#11",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME12",
        next_choice: "Crime#12",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME13",
        next_choice: "Crime#13",
      },
    };

    const crimeBatchFive = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME14",
        next_choice: "Crime#14",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME15",
        next_choice: "Crime#15",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME16",
        next_choice: "Crime#16",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME17",
        next_choice: "Crime#17",
      },
    };

    const crimeBatchSix = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME18",
        next_choice: "Crime#18",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME19",
        next_choice: "Crime#19",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME20",
        next_choice: "Crime#20",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME21",
        next_choice: "Crime#21",
      },
    };

    const crimeBatchSeven = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME22",
        next_choice: "Crime#22",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME23",
        next_choice: "Crime#23",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME24",
        next_choice: "Crime#24",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME25",
        next_choice: "Crime#25",
      },
    };

    const crimeBatchEight = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME26",
        next_choice: "Crime#26",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME27",
        next_choice: "Crime#27",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME28",
        next_choice: "Crime#28",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME29",
        next_choice: "Crime#29",
      },
    };

    const crimeBatchNine = {
      choice_one: {
        option_id: optID,
        choice_text: "CRIME30",
        next_choice: "Crime#30",
      },
      choice_two: {
        option_id: optID,
        choice_text: "CRIME31",
        next_choice: "Crime#31",
      },
      choice_three: {
        option_id: optID,
        choice_text: "CRIME32",
        next_choice: "Crime#32",
      },
      choice_four: {
        option_id: optID,
        choice_text: "CRIME33",
        next_choice: "Crime#33",
      },
    };

    const animeBatchTwo = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#2",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#3",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#4",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#5",
      },
    };

    const animeBatchThree = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#6",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#7",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#8",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#9",
      },
    };

    const animeBatchFour = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#10",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#11",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#12",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#13",
      },
    };

    const animeBatchFive = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#14",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#15",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#16",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#17",
      },
    };

    const animeBatchSix = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#18",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#19",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#20",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#21",
      },
    };

    const animeBatchSeven = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#22",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#23",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#24",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#25",
      },
    };

    const animeBatchEight = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#26",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#27",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#28",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#29",
      },
    };

    const animeBatchNine = {
      choice_one: {
        option_id: optID,
        choice_text: "Watch anime",
        next_choice: "Anime#30",
      },
      choice_two: {
        option_id: optID,
        choice_text: "Cry",
        next_choice: "Anime#31",
      },
      choice_three: {
        option_id: optID,
        choice_text: "Buy figurine",
        next_choice: "Anime#32",
      },
      choice_four: {
        option_id: optID,
        choice_text: "Be lonely",
        next_choice: "Anime#33",
      },
    };

    const laws_two = Object.values(Object.values(lawBatchTwo));
    const crimes_two = Object.values(Object.values(crimeBatchTwo));
    const animes_two = Object.values(Object.values(animeBatchTwo));

    const laws_three = Object.values(Object.values(lawBatchThree));
    const crimes_three = Object.values(Object.values(crimeBatchThree));
    const animes_three = Object.values(Object.values(animeBatchThree));

    const laws_four = Object.values(Object.values(lawBatchFour));
    const crimes_four = Object.values(Object.values(crimeBatchFour));
    const animes_four = Object.values(Object.values(animeBatchFour));

    const laws_five = Object.values(Object.values(lawBatchFive));
    const crimes_five = Object.values(Object.values(crimeBatchFive));
    const animes_five = Object.values(Object.values(animeBatchFive));

    const laws_six = Object.values(Object.values(lawBatchSix));
    const crimes_six = Object.values(Object.values(crimeBatchSix));
    const animes_six = Object.values(Object.values(animeBatchSix));

    const laws_seven = Object.values(Object.values(lawBatchSeven));
    const crimes_seven = Object.values(Object.values(crimeBatchSeven));
    const animes_seven = Object.values(Object.values(animeBatchSeven));

    const laws_eight = Object.values(Object.values(lawBatchEight));
    const crimes_eight = Object.values(Object.values(crimeBatchEight));
    const animes_eight = Object.values(Object.values(animeBatchEight));

    const laws_nine = Object.values(Object.values(lawBatchNine));
    const crimes_nine = Object.values(Object.values(crimeBatchNine));
    const animes_nine = Object.values(Object.values(animeBatchNine));

    if (navID === 2) {
      for (const choice of laws_two) {
        await postChoices(choice);
      }
    }
    if (navID === 3) {
      for (const choice of laws_three) {
        await postChoices(choice);
      }
    }
    if (navID === 4) {
      for (const choice of laws_four) {
        await postChoices(choice);
      }
    }
    if (navID === 5) {
      for (const choice of laws_five) {
        await postChoices(choice);
      }
    }
    if (navID === 6) {
      for (const choice of laws_six) {
        await postChoices(choice);
      }
    }
    if (navID === 7) {
      for (const choice of laws_seven) {
        await postChoices(choice);
      }
    }
    if (navID === 8) {
      for (const choice of laws_eight) {
        await postChoices(choice);
      }
    }
    if (navID === 9) {
      for (const choice of laws_nine) {
        await postChoices(choice);
      }
    }
    if (navID === 12) {
      for (const choice of crimes_two) {
        await postChoices(choice);
      }
    }
    if (navID === 13) {
      for (const choice of crimes_three) {
        await postChoices(choice);
      }
    }
    if (navID === 14) {
      for (const choice of crimes_four) {
        await postChoices(choice);
      }
    }
    if (navID === 15) {
      for (const choice of crimes_five) {
        await postChoices(choice);
      }
    }
    if (navID === 16) {
      for (const choice of crimes_six) {
        await postChoices(choice);
      }
    }
    if (navID === 17) {
      for (const choice of crimes_seven) {
        await postChoices(choice);
      }
    }
    if (navID === 18) {
      for (const choice of crimes_eight) {
        await postChoices(choice);
      }
    }
    if (navID === 19) {
      for (const choice of crimes_nine) {
        await postChoices(choice);
      }
    }
    if (navID === 22) {
      for (const choice of animes_two) {
        await postChoices(choice);
      }
    }
    if (navID === 23) {
      for (const choice of animes_three) {
        await postChoices(choice);
      }
    }
    if (navID === 24) {
      for (const choice of animes_four) {
        await postChoices(choice);
      }
    }
    if (navID === 25) {
      for (const choice of animes_five) {
        await postChoices(choice);
      }
    }
    if (navID === 26) {
      for (const choice of animes_six) {
        await postChoices(choice);
      }
    }
    if (navID === 27) {
      for (const choice of animes_seven) {
        await postChoices(choice);
      }
    }
    if (navID === 28) {
      for (const choice of animes_eight) {
        await postChoices(choice);
      }
    }
    if (navID === 29) {
      for (const choice of animes_nine) {
        await postChoices(choice);
      }
    }
  };

  const fetchStories = async () => {
    const r = await fetch("/story_lines");
    const stories = await r.json();
    dispatch(grabAllStories(stories));
  };

  const doAllTheThings = async (nav) => {
    dispatch(setOptionStoryLine(nav));
    await saveData(nav);
    await fetchStories();
  };

  const navStoryLine = async (id) => {
    let nav;
    const actStoryId = JSON.parse(localStorage.getItem("user_data"))
      .active_story.id;

    let option = {
      story_id: actStoryId,
      story_line_id: false,
    };

    if (id === "Choice One Followup" && activeChar.background === "lawyer") {
      nav = 2;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Two Followup" && activeChar.background === "lawyer") {
      nav = 3;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Three Followup" && activeChar.background === "lawyer") {
      nav = 4;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Four Followup" && activeChar.background === "lawyer") {
      nav = 5;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "LawMan#2" && activeChar.background === "lawyer") {
      nav = 6;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "LawMan#3" && activeChar.background === "lawyer") {
      nav = 7;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "LawMan#4" && activeChar.background === "lawyer") {
      nav = 8;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "LawMan#5" && activeChar.background === "lawyer") {
      nav = 9;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "Choice One Followup" && activeChar.background === "vagrant") {
      nav = 12;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Two Followup" && activeChar.background === "vagrant") {
      nav = 13;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Three Followup" && activeChar.background === "vagrant") {
      nav = 14;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Four Followup" && activeChar.background === "vagrant") {
      nav = 15;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "Crime#2" && activeChar.background === "vagrant") {
      nav = 16;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Crime#3" && activeChar.background === "vagrant") {
      nav = 17;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Crime#4" && activeChar.background === "vagrant") {
      nav = 18;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Crime#5" && activeChar.background === "vagrant") {
      nav = 19;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    if (id === "Choice One Followup" && activeChar.background === "otaku") {
      nav = 22;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Two Followup" && activeChar.background === "otaku") {
      nav = 23;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Three Followup" && activeChar.background === "otaku") {
      nav = 24;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Choice Four Followup" && activeChar.background === "otaku") {
      nav = 25;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Anime#2" && activeChar.background === "otaku") {
      nav = 26;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Anime#3" && activeChar.background === "otaku") {
      nav = 27;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Anime#4" && activeChar.background === "otaku") {
      nav = 28;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }
    if (id === "Anime#5" && activeChar.background === "otaku") {
      nav = 29;
      option.story_line_id = nav;

      await postOption(option);
      await choiceCreation(activeChar.background, option);
      await doAllTheThings(nav);
    }

    dispatch(setActiveStoryLine(nav));
  };

  const mappedChoices = () => {
    return storyLine.choices.map((c) => {
      return <Option key={c.id} choice={c} navStoryLine={navStoryLine} />;
    });
  };

  const trimmedChoices =
    mappedChoices().length > 4 ? mappedChoices().slice(0, 4) : mappedChoices();

  //TODO: Take storyLine.id and send it on save button click
  // Update localStorage
  // Update Redux
  // Update database

  // Could probably either make a custom redux method,
  // or even just call the setActiveStory and update with the new id?
  const saveData = async (id) => {
    const config = {
      method: "PATCH",
      body: JSON.stringify({
        current_story_line: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const r = await fetch(`/stories/${activeStory.id}`, config);
    const updatedStory = await r.json();
    dispatch(setActiveStory(updatedStory));
  };

  // debugger;
  const goHome = () => {
    navigate("/homepage");
  };

  // I have my active character set in REDUX
  // So here instead of grabbing all the story_lines I could do either one of two things

  // 1. Grab the route from the backend that has a custom method organizing the storylines based on the active_chars background
  // 2. Filter through all of the storylines and return only the ones that have a reference to the background (this will require another storyline attribute?)

  // // Think about how to track the active_storyline as well, could be another attribute in the REDUX USER SLICE. SO we can use our continue button

  // The BELOW function fetchStory could take a param of the active character perhaps? maybe an optional param of the ACTIVE STORYLINE

  // MORE COMPONENTS
  // OPTION CONTAINER
  // OPTION COMPONENT

  //TODO: How do I add all the options and choices to the specific character's STORY instance and keep track of that associated data.
  // // The storylines themselves will all be hard coded and seeded in my database

  return (
    <div className="storyline-container">
      <div className="story-dialogue-container">
        <div className="game-nav">
          <button onClick={goHome}>HOME</button>
          <button onClick={() => saveData(storyLine.id)}>SAVE</button>
        </div>
        <Dialogue storyLine={storyLine} />
      </div>

      <div className="options-container">{trimmedChoices}</div>
      <div className="inventory-container"></div>
    </div>
  );
}

export default Storyline;
