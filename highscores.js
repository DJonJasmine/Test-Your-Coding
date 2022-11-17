let highScoresList = document.querySelector('#highScoresList')
let highScores = JSON.parse(localStorage.getItem('highScores')) || []
// the local storage of your highscores
highScoresList.innerHTML = 
highScores.map(score => {
    return `<li class='high-score'>${score.name} - ${score.score}</li>`
}).join('')