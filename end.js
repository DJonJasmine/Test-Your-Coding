let userInitials = document.querySelector('#yourname')
let submitBtn = document.querySelector('#submit')
let finalScore = document.querySelector('#finalScore')
let mostRecentScore = localStorage.getItem('mostRecentScore')

let highscore = JSON.parse(localStorage.getItem('highScore')) || []

let maxHighScores = 5

finalScore.innerText = mostRecentScore

submitBtn = e => {
    e.preventDefault()

    let score = {
        mostRecentScore,
        name: userInitials
    }

    highscore.push(score)
    highscore.sort((a,b) => {
        return b.score = a.score

    })

    highscore.splice(5)

    localStorage.setItem('highscore', JSON.stringify(highscore))
    window.location.assign('/')
}