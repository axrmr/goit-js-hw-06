const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', validateInput);

function validateInput(e) {
  const trimmedInputVal = this.value.trim();
  const requiredLength = Number(this.dataset.length);

  if (trimmedInputVal.length !== requiredLength) {
    this.classList.add('invalid');

    return;
  }

  this.classList.contains('invalid') && this.classList.remove('invalid');

  this.classList.add('valid');
}
