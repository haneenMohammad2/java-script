const userForm = document.getElementById("userForm");
const coloredResult = document.getElementById("coloredResult");
const tableBody = document.getElementById("tableBody");

userForm.addEventListener("submit", function (event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Check that all fields are filled
    if (name == "" || email == "" || mobile == "") {
        alert("Please fill in all fields");
        return;
    }

    // Display the information with different colors
    coloredResult.innerHTML = `
        <span class="name-result">${name}</span>
        <span class="email-result">${email}</span>
        <span class="mobile-result">${mobile}</span>
    `;

    // Display the information inside the table
    tableBody.innerHTML = `
        <tr>
            <td>${name}</td>
            <td>${email}</td>
            <td>${mobile}</td>
        </tr>
    `;

});