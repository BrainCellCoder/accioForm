const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const btn = document.getElementById("btn");
const emailMsg = document.getElementById("emailMsg");
const passMsg = document.getElementById("passMsg");
const successMsg = document.getElementById("successMsg");

let isEmailValid = false;
let isPasswordValid = false;
btn.classList.add("disabled");

const updateSuccessMessage = () => {
  if (isEmailValid && isPasswordValid) {
    successMsg.innerText = "All good to go!";
    successMsg.style.color = "green";
    btn.classList.remove("disabled");
  } else {
    successMsg.innerText = "";
    btn.classList.add("disabled");
  }
};

emailInput.addEventListener("input", (e) => {
  if (
    e.target.value.length > 3 &&
    e.target.value.includes("@") &&
    e.target.value.includes(".")
  ) {
    emailMsg.innerText = "";
    isEmailValid = true;
  } else {
    emailMsg.innerText =
      "Make sure email is more than 3 characters and has @ and a .";
    emailMsg.style.color = "red";
    isEmailValid = false;
  }
  updateSuccessMessage();
});

passwordInput.addEventListener("input", (e) => {
  if (e.target.value.length < 8) {
    passMsg.innerText = "Make sure password is more than 8 characters.";
    passMsg.style.color = "red";
    isPasswordValid = false;
  } else {
    passMsg.innerText = "";
    isPasswordValid = true;
  }
  updateSuccessMessage();
});

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isEmailValid && isPasswordValid) {
    const confirmed = confirm("Do you want to submit the form?");
    if (confirmed) {
      alert("Successful signup!");
    }
    emailInput.value = "";
    passwordInput.value = "";
    emailMsg.innerText = "";
    passMsg.innerText = "";
    successMsg.innerText = "";
    isEmailValid = false;
    isPasswordValid = false;
    btn.classList.add("disabled");
  }
});
