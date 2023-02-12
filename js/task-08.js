const loginForm = document.forms.loginForm;

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (!email.value.trim()) {
    alert('Email required!');

    return;
  }
  if (!password.value) {
    alert('Password required!');

    return;
  }

  const formData = new FormData(e.currentTarget);

  formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });

  e.currentTarget.reset();
}
