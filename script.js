/*
* When press start first question should come up!!!!!
*
*/
// Variables for questions and navigation
let start = document.getElementById('start');
let quizQuestions = document.getElementById('question');
let choiceA = document.getElementById('A');
let choiceB = document.getElementById('B');
let choiceC = document.getElementById('C');
let userChoices = document.getElementById('option');
let submitBtn = document.getElementById('submit');
let userResults = document.getElementById('results');
let userScore = document.getElementById('user-score');
let restartBtn = document.getElementById('restart');


let currentQuestion = 0;
let score = 0;

// Button animation 
let animateButton = function(e) {

      e.preventDefault;
      //reset animation
      e.target.classList.remove('animate');
    
      e.target.classList.add('animate');
      setTimeout(function(){
      e.target.classList.remove('animate');
      },700);
    };
  
  let bubblyButtons = document.getElementsByClassName('btn');
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

// Start button function with timer and question prompt
start.addEventListener('click', function(e) {
    let timer = document.getElementById('timer');
    let timeLeft = 60;
    function timerStart() {
        let timerInterval = setInterval(function() {
              timeLeft--;

              timer.textContent = 'Timer: ' + timeLeft;

                if (timeLeft === 0) {
                  clearInterval(timerInterval);
                  timer.textContent = 'Times Up!';
                  displayMessage();
                }

        }, 1000);
    }
    timerStart();

});

// Create questions
let questions = [
    {
        question : "What is Javascript?",
        userChoices: ['a drink', 'a programming language', 'a monkey', 'a console log'],

        answer: 'a programming language'
    },{
        question : "What is Javascript?",
        userChoices: ['a drink', 'a programming language', 'a monkey', 'a console log'],

        answer: 'a programming language'
    },{
        question : "What is Javascript?",
        userChoices: ['a drink', 'a programming language', 'a monkey', 'a console log'],

        answer: 'a programming language'
    }
];
