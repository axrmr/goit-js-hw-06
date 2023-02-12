const controlsWrapp = document.getElementById('controls');
const boxesWrapp = document.getElementById('boxes');
const inputContaty = document.querySelector('input[type=number]');

controlsWrapp.addEventListener('click', e => {
  if (e.target.hasAttribute('data-create')) {
    createBoxes(inputContaty.value);

    inputContaty.value = '';

    return;
  }

  if (e.target.hasAttribute('data-destroy')) {
    destroyBoxes(boxesWrapp);
  }
});

function createBoxes(amount) {
  const boxes = [];

  for (let i = 1; i <= amount; i += 1) {
    const box = document.createElement('div');
    box.style = `width:${20 + i * 10}px;height:${20 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  appendBoxes(boxesWrapp, boxes);
}

function destroyBoxes(selector) {
  selector.innerHTML = '';
}

function appendBoxes(elem, boxes = []) {
  elem.append(...boxes);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
