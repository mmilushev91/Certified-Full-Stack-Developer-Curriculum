const questions = [
  {
    category: "Nature",
    question: "In which of these countries you can encounter a brown bear in the wild?",
    choices:["Russia", "Nigeria", "Iran"],
    answer: "Russia",
  },
  {
    category: "Geography",
    question: "In which continent is Bulgaria located?",
    choices:["Asia", "Europe", "North America"],
    answer: "Europe",
  },
  {
    category: "Mathematics",
    question: "2 + 2 is equal to ?",
    choices:["2", "6", "4"],
    answer: "4",
  },
  {
    category: "Movies",
    question: "Which actors played captain Jack Sparrow from pirates of caribean?",
    choices:["Orlando Bloom", "Johny Dept", "Brat Pit"],
    answer: "Johny Dept",
  },
  {
    category: "History",
    question: "When first Bulgarian empire was created?",
    choices:["681", "632", "811", "1014"],
    answer: "681",
  },
];

function getRandomQuestion(questions) {
  const minIdx = 0;
  const maxIdx = questions.length;

  const randomIdx = Math.trunc(Math.random() * (maxIdx - minIdx) + minIdx);

  return questions[randomIdx];
}

function getRandomComputerChoice(choices) {
  const minIdx = 0;
  const maxIdx = choices.length;

  const randomIdx = Math.trunc(Math.random() * (maxIdx - minIdx) + minIdx);

  return choices[randomIdx];
}

function getResults(question, choice) {
  if (question.answer !== choice) {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }

  return "The computer's choice is correct!";
}
