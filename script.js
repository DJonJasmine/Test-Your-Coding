/*
* TIMER WITH 2 MINS STARTS AFTER BUTTON CLICK
* 10 QUESTION QUIZ
* EACH CLICK PROMPTS NEW QUESTION
*
*
*/

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
  
  let bubblyButtons = document.getElementsByClassName("btn");
  
  for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

// Start button function with timer
start.addEventListener('click', function() {
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

// Variables for questions and navigation
let quizQuestions = document.getElementById('questions');
let userChoices = document.getElementById('choices');
let userResults = document.getElementById('results')
let userScore = document.getElementById('user-score')

let questions = [ 
    {
    question: 'foo bar foo bar',
    answers: [
        {'choice-1': 'js'},
        {'choice:-2': 'jaksjsk'},
        {'choice-3': 'java'},
        {'choice-4': 'javascript'},
    ],
    correctAnswer: 'choice-4'
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

userChoices.addEventListener(click, 'choices');


function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
   
	function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
}


