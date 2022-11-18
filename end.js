let userInitials = document.querySelector('#yourInitials')
let submitBtn = document.querySelector('#submit')
let finalScore = document.querySelector('#finalScore')
let mostRecentScore = localStorage.getItem('mostRecentScore')
// placing highscore as an array
let highscores = JSON.parse(localStorage.getItem('highscores')) || []

let maxhighscores = 5

// display the most recent score on the screen 
finalScore.innerText = mostRecentScore
// upon submit the score will be pushed
saveHighScore = e => {
    e.preventDefault()

    let score = {
        score: mostRecentScore,
        name: userInitials.value
    }
   // pushing score vaule to highscore
    highscores.push(score)

    highscores.sort((a,b) => {
        return b.score - a.score
    })
    // will add new names in highscore
    highscores.splice(5)
    // retrieving highscore from an array and placing them in string
    localStorage.setItem('highscores', JSON.stringify(highscores))
    window.location.assign('./end.html')
}