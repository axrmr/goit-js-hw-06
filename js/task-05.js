const DEFAULT_OUTPUT_VAL = 'Anonymous';
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(event) {
  if (!event.currentTarget.value) {
    output.textContent = DEFAULT_OUTPUT_VAL;
    return;
  }

  output.textContent = event.currentTarget.value;
}
