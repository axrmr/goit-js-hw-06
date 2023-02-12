const changeColorBtn = document.querySelector('.change-color');
const colorBox = document.querySelector('.color');

changeColorBtn.addEventListener('click', e => {
  let randomHexColor = getRandomHexColor();

  document.body.style.backgroundColor = randomHexColor;
  colorBox.textContent = randomHexColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
