const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const { email, password } = loginForm.elements;
  if (email.value === "" || password.value === "") {
    return alert("все поля нужно заполнить");
  }
  console.log(`login: ${email.value},password: ${password.value}`);
  loginForm.reset();
});
