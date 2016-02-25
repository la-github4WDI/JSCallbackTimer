// 1. Create Javascript selectors that target each of the timer buttons.
// 2. Create click handlers (empty, for now) for each of the timer buttons.
// 3. Instantiate seconds and timerId variables for your timer. The latter will make more sense after reading up on setInterval().
// 4. Create an updateTime() function that increments the seconds counter and inserts that value into the <h1> element with id="timer".
// 5. Inside your click handler for the start button...
// 	 *Replace "Stop Watch" in the HTML with the content of the seconds variable.
// 	 *Use setInterval() to increment the timer by 1 every second.
// 6. Inside your click handler for the pause button...
// 	 *Stop -- but do not reset! -- the timer using clearInterval().
// 7. Once again, inside your click handler for the start button...
// 	 Make sure the timer starts back up when you hit the "Start" button after hitting "Pause".
// 8. Inside your click handler for the reset button...
// 	 *Stop the timer using clearInterval().
// 	 *Reset the timer.
// 	 *Replace the time in your HTML with the original "Stop Watch" text.

var seconds=0;
var timerID;

var reset = document.getElementById("reset");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var timer = document.getElementById("timer");


function operation() {
  timerID = window.setInterval(updateTime, 1000);
  console.log(timerID)
}

function updateTime() {
  seconds++;
  timer.innerHTML = "Time Elapsed: " + seconds;
  pause.innerHTML = "Pause";
  document.getElementById("start").disabled = true; 
}

start.addEventListener("click", operation);
document.getElementById("start").disabled = false; 


function stopIt() {
  clearInterval(timerID); pause.innerHTML = "Paused";
  document.getElementById("start").disabled = false; 
 
 }

pause.addEventListener("click", stopIt);


function resetTimer() {
  stopIt();
  // clearInterval(timerID);
  seconds=0;
  timer.innerHTML = "Stop Watch";
  pause.innerHTML = "Pause";
}

reset.addEventListener("click", resetTimer);