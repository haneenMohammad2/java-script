const registerBtn = document.getElementById("registerBtn");

registerBtn.onclick = function () {

    const firstName = document.getElementById("firstName").value;

    const lastName = document.getElementById("lastName").value;

    const email = document.getElementById("registerEmail").value;

    const password = document.getElementById("registerPassword").value;

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        document.getElementById("registerMessage").innerHTML =
        "Invalid Email";

        return;
    }

    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    document.getElementById("registerMessage").innerHTML =
    "Registration Successful";

};
const loginBtn = document.getElementById("loginBtn");

loginBtn.onclick = function () {

    const loginEmail = document.getElementById("loginEmail").value;

    const loginPassword = document.getElementById("loginPassword").value;

    const savedEmail = localStorage.getItem("email");

    const savedPassword = localStorage.getItem("password");

    if (
        loginEmail === savedEmail &&
        loginPassword === savedPassword
    ) {

        document.getElementById("loginMessage").innerHTML =
        "Login Successful";

    } else {

        document.getElementById("loginMessage").innerHTML =
        "Wrong Email or Password";

    }

};