let move = document.querySelectorAll('.lines');
let climber = document.querySelector('.climber');

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

//Movment
document.addEventListener('keydown', function (event) {
  if (event.code === 'KeyX') {
    move[position + 1].appendChild(climber);
    position++;
    score += 1000;
    scoreCount.innerText = score;
    if (position === move.length - 1) {
      flag.style.visibility = 'visible';
      enemy.style.visibility = 'hidden';
      let winner = document.createElement('div');
      let winnerGif = document.createElement('img');
      winnerGif.src = './img/youwin.png';
      winner.style.cssText = `
        position: absolute;
        display:flex;
        align-self:center;
        z-index:11;`;
      area.appendChild(winner);
      winner.appendChild(winnerGif);
      setTimeout(function () {
        location.reload();
      }, 3000);
    }
  } else if (event.code === 'KeyZ') {
    move[position - 1].appendChild(climber);
    position--;
    score -= 1000;
    scoreCount.innerText = score;
    scoreCountDiv.innerText -= 100;
    if (position !== move.length - 1) {
      flag.style.visibility = 'hidden';
      enemy.style.visibility = 'visible';
    }
  }
});

//Flying fire

const area = document.querySelector('.main');

const fire = document.createElement('div');
fire.style.cssText = `
    width: 10%;
    position: absolute;
    bottom: 100%;
    left: 19%;
    z-index: 2;
    `;
const firegif = document.createElement('img');
firegif.src = './img/fireball.gif';
firegif.style.cssText = `
height: 80px;
width: 80px;
`;

fire.appendChild(firegif);
area.appendChild(fire);

let fireStartFly = Date.now();
