const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = loginForm.elements;
  if (email.value === "" || password.value === "") {
    alert("все поля нужно заполнить");
  } else {
    console.log(`login: ${email.value},password: ${password.value}`);
    loginForm.reset();
  }
});
