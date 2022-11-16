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


window.onload = function(){document.getElementById('submit').style.display = "none"; };
window.onload = function(){document.getElementById('restart').style.display = "none"; };
window.onload = function(){document.getElementById('highscores').style.display = "none"; };

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
        userChoices: ['a drink', 'a programming language', 'a monkey', 'a console log'],

        answer: 1
    },{
        question : "What are the data types?",
        userChoices: ['boolean', 'string', 'null', 'all the above'],

        answer: 3
    },{    
        question : "What is a = in Javascript?",
        userChoices: ['a assignment operator', 'a programming language', 'a monkey', 'a console log'],

        answer: 0
}];

function showQuestion() {

}