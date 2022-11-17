/*
* When press start first question should come up!!!!!
*/
// Variables for questions and navigation
let start = document.querySelector('start')
let choices = Array.from(document.querySelectorAll('.choice-text'))
let scoreText = document.querySelector('#score')
let question = document.querySelector('#question')
let timer = document.querySelector('#timer')
let userResults = document.querySelector('highscores')
let restartBtn = document.querySelector('restart')

let message = 'Time Is Up!'

// timer
let timeLeft = 60
function timerStart() {
    let quizTimer = setInterval(function() {
        timeLeft--
        document.querySelector('#timer').innerHTML = 'Timer: 00:' +timeLeft 
        if(timeLeft === 0) {
            clearInterval(quizTimer)
            displayMessage()
        }
    }, 1000)
   
    
  
}

function displayMessage() {
  
    let wordCount = 0
 
    var msgInterval = setInterval(function () {
        // If there are no more words left in the message
        if (wordCount === undefined) {
          // Use `clearInterval()` to stop the timer
          clearInterval(msgInterval);
        } else {
          // Display one word of the message
          timer.textContent = message;
          wordCount++;
        }
        }, 1000);
      
}
timerStart()
    
// Create questions
let currentQuestion = {}
let correctAnswers = true
let score = 0
let availableQuestions = []
// Questions that will be in quiz
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
        question: 'What is an = in Javascript?',
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
// When answer correctly 10 points will be added to the score
let scorePoints = 20

// starts quiz and obtain all values of questions
startQuiz = () => {

    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

// Keeps track of scores
getNewQuestion = () => {
    if (availableQuestions.length === 0) {
        localStorage.setItem('mostRecentScore', score)
        // when go through all questions it will end the quiz
        return window.location.assign('/end.html')
    }
    // randomize the quiz questions
    let questionIndex = Math.floor(Math.random() * availableQuestions.length)
    // Keeps track of question user is on
    currentQuestion = availableQuestions[questionIndex]
    question.innerText = currentQuestion.question
    // iterate through choices
    choices.forEach(choice => {
        let number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    // removes array of question once user clicks an choice
    availableQuestions.splice(questionIndex, 1)
    
    correctAnswers = true
}
// When answers is clicked the it will move forward to the next question, also tracked by data sets
choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!correctAnswers) return

        correctAnswers = false

        let selectedChoice = e.target
        let selectedAnswer = selectedChoice.dataset['number']
        // When user answer correct or incorrect a display of red and green of box will show
        let answerVisual = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        // if user gets question correct, the score will increase by 10
        if(answerVisual === 'correct') {
            incrementScore(scorePoints)
        }

        selectedChoice.parentElement.classList.add(answerVisual)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(answerVisual)
            getNewQuestion()
        }, 1000)
    })  
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}
startQuiz()