/*
* When press start first question should come up!!!!!
*
*/
// Variables for questions and navigation
let start = document.querySelector('start')
let choices = Array.from(document.querySelectorAll('.choice-text'))
let scoreText = document.querySelector('#score')
let question =document.querySelector('#question')

let userResults = document.querySelector('highscores')
let restartBtn = document.querySelector('restart')


// Start button function with timer and question prompt
start.addEventListener('click', function(e) {
    let timer = document.querySelector('timer')
    let timeLeft = 60
    function timerStart() {
        let timerInterval = setInterval(function() {
              timeLeft--;

              timer.textContent = 'Timer: ' + timeLeft

                if (timeLeft < 0) {
                  clearInterval(timerInterval)
                  timeLeft = 0
                  endQuiz()
                }

        }, 1000)
    }
    timerStart()
    

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