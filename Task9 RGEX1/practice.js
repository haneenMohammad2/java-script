const registerBtn = document.getElementById("registerBtn");

registerBtn.onclick = function () {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthDate = document.getElementById("birthDate").value;
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirmEmail").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const mobile = document.getElementById("mobile").value;

    const message = document.getElementById("message");
//1- check if the name has just letters
    if (!/^[A-Za-z]+$/.test(firstName)) {

        message.innerHTML = "First Name is not valid";

    }

    else if (!/^[A-Za-z]+$/.test(lastName)) {

        message.innerHTML = "Last Name is not valid";

    }
//- determine the birth date input and check for it in the right way
    else if (birthDate == "") {

        message.innerHTML = "Choose Birth Date";

    }
//3-check the email structure by regular expression and if the structure has an error use the Error handling
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        message.innerHTML = "Invalid Email";

    }
    //check if the two emails are the same or not.

    else if (email != confirmEmail) {

        message.innerHTML = "Emails are not the same";

    }
    //a- start with a capital letter

    else if (!/^[A-Z]/.test(password)) {

        message.innerHTML = "Password must start with capital letter";

    }
    //b- having at least two numbers

    else if (!/\d.*\d/.test(password)) {

        message.innerHTML = "Password must contain two numbers";

    }
    ///c- at least one special character or symbol

    else if (!/[!@#$%^&*]/.test(password)) {

        message.innerHTML = "Password must contain special character";

    }

///e-password length should be between 8 and 32
    else if (password.length < 8 || password.length > 32) {

        message.innerHTML = "Password length is not valid";

    }
//d- check if the pass confirmation is right
    else if (password != confirmPassword) {

        message.innerHTML = "Passwords are not the same";

    }
//6-mobile number should be 10 numbers
    else if (!/^07\d{8}$/.test(mobile)) {

        message.innerHTML = "Invalid Mobile Number";

    }

    else {

        message.innerHTML = "Registration Successful";

    }

};
