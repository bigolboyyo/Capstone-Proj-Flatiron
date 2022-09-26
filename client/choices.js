const CHOICES = {
  lawyer_init: {
    choice_one: {
      choice_text: "EAT",
      next_choice: 2,
    },
    choice_two: {
      choice_text: "SLEEP",
      next_choice: 3,
    },
    choice_three: {
      choice_text: "CODE",
      next_choice: 4,
    },
    choice_four: {
      choice_text: "REPEAT",
      next_choice: 5,
    },
  },

  vagrant_init: {
    choice_one: {
      choice_text: "EAT",
      next_choice: 6,
    },
    choice_two: {
      choice_text: "SLEEP",
      next_choice: 7,
    },
    choice_three: {
      choice_text: "CODE",
      next_choice: 8,
    },
    choice_four: {
      choice_text: "REPEAT",
      next_choice: 9,
    },
  },

  otaku_init: {
    choice_one: {
      choice_text: "EAT",
      next_choice: 10,
    },
    choice_two: {
      choice_text: "SLEEP",
      next_choice: 11,
    },
    choice_three: {
      choice_text: "CODE",
      next_choice: 12,
    },
    choice_four: {
      choice_text: "REPEAT",
      next_choice: 13,
    },
  },
};

function logOneOfEach() {
  console.log("lawyer_choice:", CHOICES.lawyer_init.choice_three);
  console.log("vagrant_choice:", CHOICES.vagrant_init.choice_two);
  console.log("otaku_choice:", CHOICES.otaku_init.choice_four);
}

logOneOfEach();
