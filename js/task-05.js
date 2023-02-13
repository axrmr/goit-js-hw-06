const DEFAULT_OUTPUT_VAL = 'Anonymous';
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', onInput);

function onInput(event) {
  const trimmedInputVal = event.currentTarget.value.trim()
  
  if (!trimmedInputVal) {
    output.textContent = DEFAULT_OUTPUT_VAL;
    
    return;
  }

  output.textContent = event.currentTarget.value;
}
