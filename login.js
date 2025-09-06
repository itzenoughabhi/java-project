 const form = document.getElementById("loginForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const errorMsg = document.getElementById("errorMsg");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (username.value === "admin" && password.value === "12345") {
        alert("Login Successful!");
        errorMsg.style.display = "none";
        // Redirect to dashboard page
        window.location.href = "dashboard.html";
      } else {
        errorMsg.style.display = "block";
      }
    });