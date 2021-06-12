//elements and event listeners

var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtonElement = document.getElementById("answer-buttons");
var randomQuestions, currentQuestionIndex;

//questions array
var questions = [
  {
    question: "<h1>what does the 'C' in CSS stand for?</h1>",
    answers: [
      { text: "Cascading", correct: true },
      { test: "Canadian", correct: false },
      { test: "Computational", correct: false },
      { test: "Colourful", correct: false },
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
      { text: "a value that that is only true", correct: false },
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
      {text: " A character in the Fast and Furious franchise", correct: false, },
     ],
  },
];

// start the game
var startQuize = function () {
  var startButton = document.getElementById("start-btn");
  startButton.remove();
  
  nextQuestion();
}
// set question
function nextQuestion() {
  showQuestion;
}

// show question from array
function showQuestion(question) {}
questionElement.innertext = question.question;

function answers() {}

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);
