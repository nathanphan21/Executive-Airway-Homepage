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
      document.location.replace("/main");
    } else {
      alert(response.statusText);
    }
  }
  console.log("-----> CLICKED!");
};

// const signupFormHandler = async (event) => {
//     event.preventDefault();
//     //we could have a name section
//     // const name = document.querySelector('#name-signup').value.trim();
//     const username = document.querySelector('#username').value.trim();
//     const password = document.querySelector('#password').value.trim();

//     if (username && password) {
//       const response = await fetch('/api', {
//         method: 'POST',
//         body: JSON.stringify({ username, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });

//       if (response.ok) {
//         document.location.replace('/main');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };

document
  .querySelector(".login-container")
  .addEventListener("submit", loginFormHandler);

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);
