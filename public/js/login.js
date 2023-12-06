const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      showLoginModal();
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#signupUsr").value.trim();
  const password = document.querySelector("#signupPwd").value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      showSignupModal();
    }
  }
};
const showLoginModal = () => {
  const loginModal = document.querySelector("#login-modal");
  loginModal.setAttribute("open", "true");
};
const showSignupModal = () => {
  const signupModal = document.querySelector("#signup-modal");
  signupModal.setAttribute("open", "true");
};
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", loginFormHandler);

const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signupFormHandler);
