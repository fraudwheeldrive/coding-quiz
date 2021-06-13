//elements and event listeners

var startButton = document.querySelector("#start");
var answersList = document.querySelector("#choices");
var questionsDiv = document.querySelector(".questions");
var questionElement = document.querySelector("#question-container");
var rightAnswer = document.querySelector("#correct");
var wrongAnswer = document.querySelector("#incorrect");
var quizEnd = document.querySelector("#finish");
var answerButtonElement = document.querySelector("#answer-buttons");
var activeTimer = document.querySelector("#timer");
var timeRemaining = 120;
var displayQuestions, questionIndex;

//questions array
var questions = [
  {
    question: "<h1>what does the 'C' in CSS stand for?</h1>",
    answers: [
      { text: "Cascading", correct: true },
      { text: "Canadian", correct: false },
      { text: "Computational", correct: false },
      { text: "Colourful", correct: false },
    ],
  },
  {
    question: "<h1>Which of the following is a 3rd party API</h1>",
    answers: [
      { text: "bootstrap", correct: true },
      { text: "shoelace", correct: false },
      { text: " cup of java", correct: false },
      { text: " javanator", correct: false },
    ],
  },
  {
    question: "<h1>what is a boolean</h1>",
    answers: [
      { text: "a value that is only true", correct: false },
      { text: "a cube to make soup", correct: false },
      { text: "a value that is only true or false", correct: true },
      { text: " a made up word", correct: false },
    ],
  },
  {
    question: "<h1> what does DOM stand for</h1>",
    answers: [
      { text: " Document Object Maker", correct: false },
      { text: "Document Object Model", correct: true },
      { text: " Design Object Modulator", correct: false },
      {
        text: " A character in the Fast and Furious franchise",
        correct: false,
      },
    ],
    question: "<h1>what is a </h1>",
    answers: [
      { text: "a value that is only true", correct: false },
      { text: "a cube to make soup", correct: false },
      { text: "a value that is only true or false", correct: true },
      { text: " a made up word", correct: false },
    ],

  },
];

var startGame = function () {
  startButton.setAttribute("class", "hide");
  displayQuestions = questions;
  questionIndex = 0;
  questionsDiv.removeAttribute("class", "hide")
  startQuiz();
};

var startQuiz = function () {
  reset();
  showQuestions(displayQuestions[questionIndex]);
};

// show question from array
var showQuestions = function (question) {
  questionElement.innerHTML = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button");
    button.innerText = answer.text;
    button.setAttribute("class", "btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", answerChoice);
    answersList.appendChild(button);
  })
};

var reset = function () {
  while (answersList.firstChild) {
    answersList.removeChild(answersList.firstChild);
  }
};

var answerChoice = function (event) {
  var answerSelect = event.target;
  var correct = answerSelect.dataset.correct;
  if (displayQuestions.length > questionIndex + 1) {
    displayAnswer(rightAnswer, wrongAnswer, correct);
  } else {
    clearDisplayAnswer(rightAnswer, wrongAnswer);
    questionsDiv.setAttribute("class", "hide");
    quizEnd.removeAttribute("class", "hide");
  }
  questionIndex++;
  startQuiz();
};

//print answer
var displayAnswer = function (rightAnswer, wrongAnswer, correct) {
  clearDisplayAnswer(rightAnswer, wrongAnswer);
  if (correct) {
    rightAnswer.removeAttribute("class", "hide");
  } else {
    wrongAnswer.removeAttribute("class", "hide");
    timeRemaining -= 5;
  }
};

var clearDisplayAnswer = function (rightAnswer, wrongAnswer) {
  rightAnswer.setAttribute("class", "hide");
  wrongAnswer.setAttribute("class", "hide");
};

var quizTimer = function () {
  activeTimer = activeTimer;
  var timeInterval = setInterval(function () {
    if (timeRemaining > 0 && quizEnd.hasAttribute("class", "hide")) {
      activeTimer.textContent = "time:" + timeRemaining;
      timeRemaining--;
    } else {
      clearInterval(timeInterval);
      clearDisplayAnswer(rightAnswer, wrongAnswer);
      questionsDiv.setAttribute("class", "hide");
      localStorage.setItem("recentScore", timeRemaining);
    }
  }, 1000);
};

startButton.addEventListener("click", startGame);
startButton.addEventListener("click", quizTimer);
