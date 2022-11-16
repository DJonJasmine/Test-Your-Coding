/*
* When press start first question should come up!!!!!
*
*/
// Variables for questions and navigation
let start = document.getElementById('start');
let quizInfo = document.getElementById('quizInfo');
let quizParagraph = document.getElementById('infoParagraph')
let quizQuestions = document.getElementById('questions');
let answers = Array.from(document.getElementsByClassName('answers'));
let submitBtn = document.getElementById('submit');
let userResults = document.getElementById('highscores');
let userScore = document.getElementById('user-score');
let restartBtn = document.getElementById('restart');


// Start button function with timer and question prompt
start.addEventListener('click', function(e) {
    let timer = document.getElementById('timer');
    let timeLeft = 60;
    function timerStart() {
        let timerInterval = setInterval(function() {
              timeLeft--;

              timer.textContent = 'Timer: ' + timeLeft;

                if (timeLeft < 0) {
                  clearInterval(timerInterval);
                  timeLeft = 0;
                  endQuiz();
                }

        }, 1000);
    }
    timerStart();

    function startQuiz() {
        start.style.display = 'none';
        quizInfo.style.display = 'none';
        quizParagraph.style.display = 'none';
        timerStart();
        timer.textContent = 'Timer: ' + timeLeft;
        startQuestions();
    }
    startQuiz();
    

});


// Create questions
let questions = [
    {
        question : "What is Javascript?",
        userChoices: ['a drink', 'a programming language', 'a animal', 'a console log'],

        answer: 1
    },{
        question : "What are the data types?",
        userChoices: ['boolean', 'string', 'null', 'all the above'],

        answer: 3
    },{    
        question : "What is a = in Javascript?",
        userChoices: ['a assignment operator', 'a programming language', 'a cat', 'a console log'],

        answer: 0
}];

function showQuestion() {

}