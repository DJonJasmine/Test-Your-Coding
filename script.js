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

let timer = document.getElementById('timer');


start.addEventListener('click', function() {
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




