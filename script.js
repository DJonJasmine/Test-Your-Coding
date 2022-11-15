/*
* When press start first question should come up!!!!!
*
*/
// Variables for questions and navigation
let quizQuestions = document.getElementById('questions');
let nextBtn = document.getElementById('next');
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


let questions = [ 
    {
    question: 'What is JavaScript?',
    answers: [
        {choice: 'A new sport', answer: false},
        {choice: 'A play', answer: false},
        {choice: 'A new starbucks drink', answer: false},
        {choice: 'A programming language', answer: true},
    ],
},
{
    question: 'When to use console.log()?',
    answers: [
        {choice: 'js', answer: false},
        {choice: 'jaksjsk', answer: true},
        {choice: 'java', answer: false},
        {choice: 'javascript', answer: false},

    ]
},
{
    question: 'foo bar foo bar',
    answers: [
        {choice: 'js'},
        {choice: 'jaksjsk'},
        {choice: 'java'},
        {choice: 'javascript'},

    ]
},
{
    question: 'foo bar foo bar',
    answers: [
        {choice: 'js'},
        {choice: 'jaksjsk'},
        {choice: 'java'},
        {choice: 'javascript'},
    ]
},
{
    question: 'foo bar foo bar',
    answers: [
        {choice: 'js'},
        {choice: 'jaksjsk'},
        {choice: 'java'},
        {choice: 'javascript'}, 
    ]
}
]



submitBtn.addEventListener('click', submit);
restartBtn.addEventListener('click', restart);