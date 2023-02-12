const rangeInput = document.getElementById('font-size-control');
const output = document.getElementById('text');

rangeInput.addEventListener('input', onInputRangeChange);

function onInputRangeChange(e) {
  output.style.fontSize = `${this.value}px`;
}
