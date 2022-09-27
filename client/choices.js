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

const choiceCreation = async (background) => {
  const options = JSON.parse(localStorage.getItem("options"));
  const optID = options.id;

  const lawBatchTwo = {
    choice_one: {
      option_id: optID,
      choice_text: "LAWMAN",
      next_choice: "Choice One Followup",
    },
    choice_two: {
      option_id: optID,
      choice_text: "LAWBRO",
      next_choice: "Choice Two Followup",
    },
    choice_three: {
      option_id: optID,
      choice_text: "LAWDUDE",
      next_choice: "Choice Three Followup",
    },
    choice_four: {
      option_id: optID,
      choice_text: "LAWGUY",
      next_choice: "Choice Four Followup",
    },
  };

  const laws = Object.values(Object.values(lawBatchTwo));

  if (background === "lawyer") {
    for (const choice of laws) {
      await postChoices(choice);
    }
  }
};

const option = {
  story_id: JSON.parse(localStorage.getItem("user_data")).active_story.id,
  story_line_id: storyLine.id,
};
