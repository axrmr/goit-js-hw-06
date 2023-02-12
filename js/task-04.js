const decrementButton = document.querySelector('[data-action=decrement]');
const incrementButton = document.querySelector('[data-action=increment]');
const counterOutput = document.querySelector('#value');
let counterValue = 0;

decrementButton.addEventListener('click', updateCounterOutput);
incrementButton.addEventListener('click', updateCounterOutput);

function updateCounterOutput(event) {
  if (event.target.dataset.action === 'decrement') {
    counterOutput.innerHTML = counterValue -= 1;

    return;
  }

  if (event.target.dataset.action === 'increment') {
    counterOutput.innerHTML = counterValue += 1;
  }
}
