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
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
      // alert(`${username} logged in!`);
    } else {
      console.log("DIDNT WORK");

      showModal();
    }
  }
  console.log("-----> CLICKED!");
};

const signupFormHandler = async (event) => {
  event.preventDefault();
  //we could have a name section
  // const name = document.querySelector('#name-signup').value.trim();
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
      // alert(`Welcome new user ${username}!`);
    } else {
      showModal();
    }
  }
};
const showModal = () => {
  const modal = document.querySelector("#modal");
  modal.setAttribute("open", "true");
};
const loginBtn = document.querySelector("#loginBtn");
loginBtn.addEventListener("click", loginFormHandler);

const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signupFormHandler);

// const modalConfirm = document.querySelector("#confirmBtn");
// modalConfirm.addEventListener("click", document.location.replace("/login"));
