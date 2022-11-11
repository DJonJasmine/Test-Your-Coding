/*
* TIMER WITH 2 MINS STARTS AFTER BUTTON CLICK
* 10 QUESTION QUIZ
* EACH CLICK PROMPTS NEW QUESTION
*
*
*/
 // Timer creation
let timer = document.getElementById('timer');

function countdown() {
    let timerInterval = setInterval(function() {
        
    })
}

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