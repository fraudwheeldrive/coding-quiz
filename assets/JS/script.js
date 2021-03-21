
var startButton = document.getElementById("start-btn")

startButton.addEventListener("click", startQuiz);


// start the game 
function startQuiz() {
    var startButton = document.getElementById("start-btn");
    startButton.remove();
    console.log("start the game")
}

function nextButton () {
    

}

function answers() {

}

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