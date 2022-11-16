/*
* When press start first question should come up!!!!!
*
*/
// Variables for questions and navigation
let start = document.querySelector('start')
let choices = Array.from(document.querySelectorAll('.choice-text'))
let scoreText = document.querySelector('#score')
let question = document.querySelector('#question')
let timer = document.querySelector('#timer')
let userResults = document.querySelector('highscores')
let restartBtn = document.querySelector('restart')

// timer

let timeLeft = 60
function timerStart() {
    let timerInterval = setInterval(function() {
        timeLeft--;

        timer.textContent = 'Timer: ' + timeLeft

        if (timeLeft === 0) {
            clearInterval(timerInterval);
            displayMessage();
        }

    }, 1000)
}

function displayMessage() {
    var timerCount = 0;
    let message = ('Time Is Up!')
    let words = message.split('')
  
    // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var msgInterval = setInterval(function () {
      // If there are no more words left in the message
      if (words[timerCount] === undefined) {
        // Use `clearInterval()` to stop the timer
        clearInterval(msgInterval);
      } else {
        // Display one word of the message
        timer.textContent = words[timerCount];
      }
    }, 1000);
}
timerStart()
    
// Create questions
let currentQuestion = []
let userAnswers = true
let score = 0
let quizQuestions = []

let questions = [
    {
        question: 'What is Javascript?',
        choice1: 'a drink', 
        choice2: 'a programming language', 
        choice3: 'an element', 
        choice4: 'a console log',
        answer: 2,
    },
    {
        question: 'What modern keyword is used to declare variables that can be changed?',
        choice1: 'let', 
        choice2: 'var', 
        choice3: 'const', 
        choice4: 'all the above',
        answer: 1,
    },
    {
        question: 'What are the data types?',
        choice1: 'boolean', 
        choice2: 'string', 
        choice3: 'null', 
        choice4: 'all the above',
        answer: 4,
    },
    {
        question: 'What is an ‘=’ in Javascript?',
        choice1: 'an equal sign', 
        choice2: 'an decrement', 
        choice3: 'an assignment operator', 
        choice4: 'an increment',
        answer: 3,
    },
    {
        question:'What are all the pop up boxes available JavaScript?',
        choice1: 'confirm', 
        choice2: 'all the above', 
        choice3: 'alert', 
        choice4: 'prompt',
        answer: 2,
    },
    
]

