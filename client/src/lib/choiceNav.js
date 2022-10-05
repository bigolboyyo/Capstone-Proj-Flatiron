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
    for (const choice of choices.laws_seven) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 5) {
    for (const choice of choices.laws_seventeen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  //worm death choices
  if (navID === 6) {
    for (const choice of choices.laws_ten) {
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
    //alt tremor death
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
    for (const choice of choices.laws_eleven) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 32) {
    for (const choice of choices.laws_twelve) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 33) {
    for (const choice of choices.laws_four) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 34) {
    for (const choice of choices.laws_ten) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 35) {
    for (const choice of choices.laws_five) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 36) {
    for (const choice of choices.laws_five) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 37) {
    for (const choice of choices.laws_six) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 38) {
    for (const choice of choices.laws_four) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 39) {
    for (const choice of choices.laws_five) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 40) {
    for (const choice of choices.laws_ten) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 41) {
    for (const choice of choices.laws_ten) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 42) {
    for (const choice of choices.laws_eight) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 43) {
    for (const choice of choices.laws_nine) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 44) {
    for (const choice of choices.laws_thirteen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 45) {
    for (const choice of choices.laws_fourteen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 46) {
    for (const choice of choices.laws_fifteen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 47) {
    for (const choice of choices.laws_sixteen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 48) {
    for (const choice of choices.laws_eighteen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
  if (navID === 49) {
    for (const choice of choices.laws_eighteen) {
      choice.option_id = JSON.parse(localStorage.getItem("options")).id;
      await postChoices(choice);
    }
  }
};
