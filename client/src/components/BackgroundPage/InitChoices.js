// const func = () => console.log("hi");
// const times = 3;

// Array.from({length: times}, () => func());

export default function initChoiceCreation(background) {
  const optionID = JSON.parse(localStorage.getItem("init")).id;

  const lawChoices = {
    choice_one: {
      option_id: optionID,
      choice_text: "Lawyer Choice one",
    },
    choice_two: {
      option_id: optionID,
      choice_text: "Lawyer Choice two",
    },
    choice_three: {
      option_id: optionID,
      choice_text: "Lawyer Choice three",
    },
    choice_four: {
      option_id: optionID,
      choice_text: "Lawyer Choice four",
    },
  };

  const vagrantChoices = {
    choice_one: {
      option_id: optionID,
      choice_text: "Vagrant Choice one",
    },
    choice_two: {
      option_id: optionID,
      choice_text: "Vagrant Choice two",
    },
    choice_three: {
      option_id: optionID,
      choice_text: "Vagrant Choice three",
    },
    choice_four: {
      option_id: optionID,
      choice_text: "Vagrant Choice four",
    },
  };

  const otakuChoices = {
    choice_one: {
      option_id: optionID,
      choice_text: "Otaku Choice one",
    },
    choice_two: {
      option_id: optionID,
      choice_text: "Otaku Choice two",
    },
    choice_three: {
      option_id: optionID,
      choice_text: "Otaku Choice three",
    },
    choice_four: {
      option_id: optionID,
      choice_text: "Otaku Choice four",
    },
  };

  const postInitChoices = async (choiceObj) => {
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

  const times = 4;

  if (background === "lawyer") {
    Array.from({ length: times }, () => postInitChoices(lawChoices[times]));
  }
  if (background === "vagrant") {
    Array.from({ length: times }, () => postInitChoices(vagrantChoices[times]));
  }
  if (background === "otaku") {
    Array.from({ length: times }, () => postInitChoices(otakuChoices[times]));
  }
}
