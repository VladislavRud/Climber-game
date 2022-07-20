let position = 0;
let score = 0;
let scoreCount = document.querySelector('#scorecount');

//Timer
let timerCount = document.getElementById('timer1');
let timerGif = document.createElement('img');
timerGif.src = './img/timer.gif';
timerCount.appendChild(timerGif);
timerCount.style.cssText = `
      position: absolute;
      top:20%;
      left:35%;
      font-size:200px;
      z-index:11;
      `;
var timeleft = 1;
var downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    clearInterval(downloadTimer);
    timerCount.style.visibility = 'hidden';
  }

  timeleft -= 1;
}, 1200);
