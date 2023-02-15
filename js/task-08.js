const loginForm = document.forms.loginForm;

loginForm.addEventListener('submit', onLoginFormSubmit);

function onLoginFormSubmit(e) {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (!email.value.trim() ) {
    alert('Email required!');

    return;
  }
  if (!password.value.trim() ) {
    alert('Password required!');

    return;
  }

  const formData = {
    email: email.value,
    password: password.value,
  };

  console.log(formData);

  e.currentTarget.reset();
}
