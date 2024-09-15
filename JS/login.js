function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const pesanError = document.getElementById("pesan-error");

  if (username !== "232410103098" && password !== "QWERTY12345") {
    pesanError.textContent = "Username atau Password Anda Salah!";
  } else {
    window.location.href = "../Project ReFind/HTML/page-2.html";
  }
}
