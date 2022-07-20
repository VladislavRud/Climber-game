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

let fireFly = setInterval(function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
      clearInterval(timer);
      return;
    }
    if (position !== move.length - 1) {
      if (timePassed < 2500) {
        draw(timePassed);
      }
    }

    let climberRect = climber.getBoundingClientRect();
    let fireRect = firegif.getBoundingClientRect();
    if (
      climberRect.top < fireRect.top &&
      climberRect.bottom > fireRect.bottom &&
      climberRect.right > fireRect.right &&
      climberRect.left < fireRect.left
    ) {
      let climberimg = document.querySelector('.climberimg');
      climberimg.src = './img/explode.gif';
      climberimg.style.cssText = `
        height: 250px;
        width: 200px;`;

      setTimeout(function () {
        location.reload();
      }, 1200);
    }
  }, 25);
}, 2000);

function draw(timePassed) {
  fire.style.transform = 'scale(1, 1)';
  fire.style.top = (timePassed * 0.95) / 25 + '%';
  //fire.style.left = (timePassed * 0.95 / 23) + '%'
}

const fire2 = document.createElement('div');
fire2.style.cssText = `
    width: 10%;
    position: absolute;
    bottom: 100%;
    left: 26%;
    z-index: 2;
    `;
const fire2gif = document.createElement('img');
fire2gif.src = './img/fireball.gif';
fire2gif.style.cssText = `
height: 80px;
width: 80px;
`;

fire2.appendChild(fire2gif);
area.appendChild(fire2);

let fire2Fly = setInterval(function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
      clearInterval(timer);
      return;
    }
    if (position !== move.length - 1) {
      if (timePassed < 2500) {
        draw2(timePassed);
      }
    }
    let climberRect = climber.getBoundingClientRect();
    let fire2Rect = fire2gif.getBoundingClientRect();
    if (
      climberRect.top < fire2Rect.top &&
      climberRect.bottom > fire2Rect.bottom &&
      climberRect.right > fire2Rect.right &&
      climberRect.left < fire2Rect.left
    ) {
      let climberimg = document.querySelector('.climberimg');
      climberimg.src = './img/explode.gif';
      climberimg.style.cssText = `
      height: 250px;
      width: 200px;`;

      setTimeout(function () {
        location.reload();
      }, 1200);
    }
  }, 25);
}, 2000);

function draw2(timePassed) {
  fire2.style.transform = 'scale(1, 1)';
  fire2.style.bottom = (timePassed * 0.95) / 25 + '%';
  //fire2.style.left = (timePassed * 0.95 / 30) + '%'
}

const fire3 = document.createElement('div');
fire3.style.cssText = `
    width: 10%;
    position: absolute;
    bottom: 100%;
    left: 37%;
    z-index: 2;
    `;
const fire3gif = document.createElement('img');
fire3gif.src = './img/fireball.gif';
fire3gif.style.cssText = `
height: 80px;
width: 80px;
`;

fire3.appendChild(fire3gif);
area.appendChild(fire3);

let fire3Fly = setInterval(function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
      clearInterval(timer);
      return;
    }
    if (position !== move.length - 1) {
      if (timePassed < 2500) {
        draw3(timePassed);
      }
    }

    let climberRect = climber.getBoundingClientRect();
    let fire3Rect = fire3gif.getBoundingClientRect();
    if (
      climberRect.top < fire3Rect.top &&
      climberRect.bottom > fire3Rect.bottom &&
      climberRect.right > fire3Rect.right &&
      climberRect.left < fire3Rect.left
    ) {
      let climberimg = document.querySelector('.climberimg');
      climberimg.src = './img/explode.gif';
      climberimg.style.cssText = `
      height: 250px;
      width: 200px;`;
      setTimeout(function () {
        location.reload();
      }, 1200);
    }
  }, 10);
}, 2000);

function draw3(timePassed) {
  fire3.style.transform = 'scale(1, 1)';
  fire3.style.top = (timePassed * 0.95) / 25 + '%';
  //fire3.style.left = (timePassed * 0.6 / 45) + '%'
}

const fire4 = document.createElement('div');
fire4.style.cssText = `
    width: 10%;
    position: absolute;
    bottom: 100%;
    left: 45%;
    z-index: 2;
    `;
const fire4gif = document.createElement('img');
fire4gif.src = './img/fireball.gif';
fire4gif.style.cssText = `
height: 80px;
width: 80px;
`;

fire4.appendChild(fire4gif);
area.appendChild(fire4);

let fire4Fly = setInterval(function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
      clearInterval(timer);
      return;
    }
    if (position !== move.length - 1) {
      if (timePassed < 2500) {
        draw4(timePassed);
      }
    }

    let climberRect = climber.getBoundingClientRect();
    let fire4Rect = fire4gif.getBoundingClientRect();
    if (
      climberRect.top < fire4Rect.top &&
      climberRect.bottom > fire4Rect.bottom &&
      climberRect.right > fire4Rect.right &&
      climberRect.left < fire4Rect.left
    ) {
      let climberimg = document.querySelector('.climberimg');
      climberimg.src = './img/explode.gif';
      climberimg.style.cssText = `
      height: 250px;
      width: 200px;`;
      setTimeout(function () {
        location.reload();
      }, 1200);
    }
  }, 10);
}, 2000);

function draw4(timePassed) {
  fire4.style.transform = 'scale(1, 1)';
  fire4.style.bottom = (timePassed * 0.95) / 25 + '%';
}

const fire5 = document.createElement('div');
fire5.style.cssText = `
    width: 10%;
    position: absolute;
    bottom: 100%;
    left: 57%;
    z-index: 2;
    `;
const fire5gif = document.createElement('img');
fire5gif.src = './img/fireball.gif';
fire5gif.style.cssText = `
height: 80px;
width: 80px;
`;

fire5.appendChild(fire5gif);
area.appendChild(fire5);

let fire5Fly = setInterval(function () {
  let start = Date.now();
  let timer = setInterval(function () {
    let timePassed = Date.now() - start;
    if (timePassed >= 2000) {
      clearInterval(timer);
      return;
    }
    if (position !== move.length - 1) {
      if (timePassed < 2500) {
        draw5(timePassed);
      }
    }

    let climberRect = climber.getBoundingClientRect();
    let fire5Rect = fire5gif.getBoundingClientRect();
    if (
      climberRect.top < fire5Rect.top &&
      climberRect.bottom > fire5Rect.bottom &&
      climberRect.right > fire5Rect.right &&
      climberRect.left < fire5Rect.left
    ) {
      let climberimg = document.querySelector('.climberimg');
      climberimg.src = './img/explode.gif';
      climberimg.style.cssText = `
      height: 250px;
      width: 200px;`;
      setTimeout(function () {
        location.reload();
      }, 1200);
    }
  }, 10);
}, 2000);

function draw5(timePassed) {
  fire5.style.transform = 'scale(1, 1)';
  fire5.style.top = (timePassed * 0.95) / 21 + '%';
}
