
//elements and event listeners

var startButton = document.getElementById("start-btn")
var nextButton = document.getElementById("next-btn")
var questionContainerElement = document.getElementById("question-container")
var questionElement= document.getElementById("question")
var answerButtonElement = document.getElementById("answer-buttons")


startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion)


var randomQuestions, currentQuestionIndex

// start the game 
function startQuiz() {
    var startButton = document.getElementById("start-btn");
    startButton.remove();
    randomQuestions = question.sort(()=> Math,random() - .5)
    currentQuestionsIndex = 0
    nextQuestion()    
}
// set question 
function nextQuestion() {
showQuestion    
   
}

// show question from array
function showQuestion(question) {}
questionElement.innertext = question.question

function answers() {

}

//questions array 
var questions = [

    {
        question: "what does the 'C' in CSS stand for?",
        answers: {
            a: "Cascading",
            b: "Canadian",
            c: "Computational",
            d: "Colourful",
        },
        correctAnswer: "a"
    },
    {
    question: "Which of the following is a 3rd party API",
    answers: {
        a: "Shoelace",
        b: "Wellington",
        c: "Javaflava",
        d: "Bootstrap",
    },
    correctAnswer: "d"
},
{
    question: "what is a boolean",
    answers: {
        a: "a value that that is only true",
        b: "a cube to make soup",
        c: "a value that is only true or false",
        d: "a made up word",
    },
    correctAnswer: "c"
},
{   
question: "what does 'DOM' standfor",
answers: {
    a: "Document Object Maker",
    b: "Document Object Model",
    c: "Design Object Modulator",
    d: "a character from the Fast and the Furious franchise ",
},
correctAnswer: "d"     
}
]