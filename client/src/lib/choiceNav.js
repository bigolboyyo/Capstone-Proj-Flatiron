import { choices } from "./ChoicesLib";

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

export const choiceNav = async (navID) => {
  if (navID === 2) {
    for (const choice of choices.laws_two) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 3) {
    for (const choice of choices.laws_three) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 4) {
    for (const choice of choices.laws_four) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 5) {
    for (const choice of choices.laws_five) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 6) {
    for (const choice of choices.laws_six) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 7) {
    for (const choice of choices.laws_seven) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 8) {
    for (const choice of choices.laws_eight) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 9) {
    for (const choice of choices.laws_nine) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 10) {
    for (const choice of choices.laws_ten) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 12) {
    for (const choice of choices.crimes_two) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 13) {
    for (const choice of choices.crimes_three) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 14) {
    for (const choice of choices.crimes_four) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 15) {
    for (const choice of choices.crimes_five) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 16) {
    for (const choice of choices.crimes_six) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 17) {
    for (const choice of choices.crimes_seven) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 18) {
    for (const choice of choices.crimes_eight) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 19) {
    for (const choice of choices.crimes_nine) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 20) {
    for (const choice of choices.crimes_ten) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 22) {
    for (const choice of choices.animes_two) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 23) {
    for (const choice of choices.animes_three) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 24) {
    for (const choice of choices.animes_four) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 25) {
    for (const choice of choices.animes_five) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 26) {
    for (const choice of choices.animes_six) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 27) {
    for (const choice of choices.animes_seven) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 28) {
    for (const choice of choices.animes_eight) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 29) {
    for (const choice of choices.animes_nine) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 30) {
    for (const choice of choices.animes_ten) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 31) {
    for (const choice of choices.laws_item_one) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
};
