const btnStartPause = document.querySelector('.btn-start');
const btnReset = document.querySelector('.btn-reset');
const displayPanel = document.querySelector('.display-panel');

let active = 0;
let onOff;
let seconds = 0;

function onOffTimer() {
  active++;
  if (active === 1) {
    btnStartPause.textContent = "Pause";
    start();
  } else if (active === 2) {
    btnStartPause.textContent = "Start";
    active = 0;
    pause();
  }
}

function start() {
  onOff = setInterval(timer, 10);
}

function pause() {
  clearInterval(onOff);
}

function timer() {
  seconds++
  displayPanel.textContent = (seconds / 100).toFixed(2);
}

function reset() {
  seconds = 0;
  displayPanel.textContent = "---";
  clearInterval(onOff);
}

btnStartPause.addEventListener('click', onOffTimer);
btnReset.addEventListener('click', reset);