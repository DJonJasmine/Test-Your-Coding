let highScoresList = document.querySelector('#highScoresList')
let highscores = JSON.parse(localStorage.getItem('highscores')) || []

// the local storage of your highscores and returns the storage to the high score list
highScoresList.innerHTML = highscores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')