// Fetch sign-up btn
const signUpBtn = document.querySelector("[data-js-btn-subscribe]"),
  dismissBtn = document.querySelector("[data-js-btn-dismiss]"),
  subscribe = document.querySelector(".subscribe"),
  subscribed = document.querySelector(".subscribed");

// Listening for clicks
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const emailEl = document.querySelector("[data-js-email]"),
    error = document.querySelector(".error");

  email = emailEl.value.trim();

  const validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (email === "") {
    error.textContent = "Email can't be empty";
  } else if (!email.match(validEmail)) {
    error.textContent = "Invalid Email";
  } else {
    error.textContent = "";
    email = "";
    subscribe.classList.add("hidden");
    subscribed.classList.remove("hidden");
  }
});

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();
  subscribed.classList.add("hidden");
  subscribe.classList.remove("hidden");
});
