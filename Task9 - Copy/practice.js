const registerBtn = document.getElementById("registerBtn");

registerBtn.onclick = function () {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthDate = document.getElementById("birthDate").value;

    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;

    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    const mobile = document.getElementById("mobile").value;

    const message = document.getElementById("message");

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobilePattern = /^\d{10}$/;

    if (!namePattern.test(firstName)) {
        message.innerHTML =
            "First name must contain letters only";
    }

    else if (!namePattern.test(lastName)) {
        message.innerHTML =
            "Last name must contain letters only";
    }

    else if (birthDate === "") {
        message.innerHTML =
            "Please choose your birth date";
    }

    else if (!emailPattern.test(email)) {

        try {
            throw new Error("Invalid email");
        }

        catch (error) {
            message.innerHTML = error.message;
        }

    }

    else if (email !== confirmEmail) {
        message.innerHTML =
            "Emails do not match";
    }

    else if (!/^[A-Z]/.test(password)) {
        message.innerHTML =
            "Password must start with a capital letter";
    }

    else if (!/\d.*\d/.test(password)) {
        message.innerHTML =
            "Password must contain at least two numbers";
    }

    else if (!/[!@#$%^&*]/.test(password)) {
        message.innerHTML =
            "Password must contain a special character";
    }

    else if (
        password.length < 8 ||
        password.length > 32
    ) {
        message.innerHTML =
            "Password length must be between 8 and 32";
    }

    else if (password !== confirmPassword) {
        message.innerHTML =
            "Passwords do not match";
    }

    else if (!mobilePattern.test(mobile)) {
        message.innerHTML =
            "Mobile number must be exactly 10 digits";
    }

    else {
        message.innerHTML =
            "Registration Successful";
    }

};