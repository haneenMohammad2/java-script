// Get the register button
const registerBtn =
    document.getElementById("registerBtn");


// Register button click
registerBtn.onclick = function () {

    // Get registration values
    const firstName =
        document.getElementById("firstName").value;

    const lastName =
        document.getElementById("lastName").value;

    const email =
        document.getElementById("registerEmail").value;

    const password =
        document.getElementById("registerPassword").value;

    const registerMessage =
        document.getElementById("registerMessage");


    // Check if any field is empty
    if (
        firstName == "" ||
        lastName == "" ||
        email == "" ||
        password == ""
    ) {
        registerMessage.innerHTML =
            "Please fill in all fields";

        return;
    }


    // Check the email format
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        registerMessage.innerHTML ="Invalid email";

        return;
    }


    // Store the registration data in local storage
    localStorage.setItem("firstName",firstName
    );

    localStorage.setItem( "lastName",lastName
    );

    localStorage.setItem("email",email
    );

    localStorage.setItem("password",password
    );


    // Display a success message
    registerMessage.innerHTML ="Registration successful";

};


// Get the login button
const loginBtn = document.getElementById("loginBtn");


// Login button click
loginBtn.onclick = function () {

    // Get login values
    const loginEmail =
        document.getElementById("loginEmail").value;

    const loginPassword =
        document.getElementById("loginPassword").value;

    const loginMessage =
        document.getElementById("loginMessage");


    // Check if the login fields are empty
    if (
        loginEmail == "" || loginPassword == ""
    ) {
        loginMessage.innerHTML ="Please fill in all fields";

        return;
    }


    // Read the stored data from local storage
    const savedEmail =
        localStorage.getItem("email");

    const savedPassword =
        localStorage.getItem("password");


    // Compare login data with stored data
    if (
        loginEmail === savedEmail && loginPassword === savedPassword
    ) {
        loginMessage.innerHTML ="Login successful";
    }

    else {
        loginMessage.innerHTML = "Wrong email or password";
    }

};