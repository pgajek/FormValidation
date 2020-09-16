const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function setErrorFor(input, message) {
  const formControl = input.closest(".form-control");
  const error = formControl.querySelector(".errorMessage");

  error.innerText = message;

  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

function checkInputs() {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const password2Value = password2.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Username can not be blank");
  } else {
    setSuccessFor(username);
  }
  if (emailValue === "") {
    setErrorFor(email, "E-mail can not be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "E-mail can not be blank");
  } else {
    setSuccessFor(email);
  }
}
//trim remover whitespace from both ends

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
