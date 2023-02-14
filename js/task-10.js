const createBtnEl = document.querySelector('[data-create]');
const destroyBtnEl = document.querySelector('[data-destroy]');
const boxesWrapEl = document.getElementById('boxes');
const bubbleWrapEl = document.querySelector('.bubble-wrap');
const inputContatyEl = document.querySelector('input[type=number]');
const minContaty = Number(inputContatyEl.min);
const maxContaty = Number(inputContatyEl.max);

createBtnEl.addEventListener('click', onCreateBtnClick);
destroyBtnEl.addEventListener('click', onDestroyBtnClick);

function onCreateBtnClick() {
  if (inputContatyEl.value < minContaty || inputContatyEl.value > maxContaty) {
    notify();

    return;
  }

  createBoxes(inputContatyEl.value);
  clearInputValue(inputContatyEl);
}

function createBoxes(amount) {
  let boxesMarkup = '';

  for (let i = 1; i <= amount; i += 1) {
    const boxSize = 20 + i * 10;
    const randomColor = getRandomHexColor();
    const box = `<div style="width:${boxSize}px;height:${boxSize}px;background-color:${randomColor}"></div>`;

    boxesMarkup += box;
  }

  boxesWrapEl.innerHTML = boxesMarkup;
}

function onDestroyBtnClick() {
  boxesWrapEl.innerHTML = '';
}

function notify() {
  bubbleWrapEl.classList.add('visible');

  const id = setTimeout(() => {
    bubbleWrapEl.classList.remove('visible');

    clearTimeout(id);
  }, 1350);
}

function clearInputValue(element) {
  element.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
