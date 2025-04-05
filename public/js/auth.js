// Ini adalah logika authentication

// Fungsi CheckLogin
function checklogin() {
  if (localStorage.getItem('isLoggedIn') !== 'true') {
    window.location.href = "index.html";
    alert("Please Log In First!!!");
  }
}

// Fungsi LogOut
function logout() {
  localStorage.removeItem('isLoggedIn');
  window.location.href = "index.html";
}

// Fungsi Login
function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === "admin" && password === "!4dmin123") {
    localStorage.setItem('isLoggedIn', 'true');
    window.location.href = "home.html";
  } else {
    alert("Username or password are wrong!!!");
  }
}