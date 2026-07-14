// Get the submit button
const projectBtn =
    document.getElementById("projectBtn");

// Get the message element
const projectMessage =
    document.getElementById("projectMessage");

// Get the card container
const projectCard =
    document.getElementById("projectCard");


// Run the function when the button is clicked
projectBtn.onclick = function () {

    // Get the values from the form
    const subject =
        document.getElementById("subject").value;

    const description =
        document.getElementById(
            "projectDescription").value;

    const userTypes =
        document.getElementById("userTypes").value;

    const technology =
        document.getElementById("technology").value;


    // Check if any field is empty
    if (
        subject == "" ||
        description == "" ||
        userTypes == "" ||
        technology == ""
    ) {
        projectMessage.innerHTML =
            "Please fill in all fields";

        return;
    }


    // Create an object containing the project information
    const project = {

        subject: subject,

        description: description,

        userTypes: userTypes,

        technology: technology

    };


    // Save the object in Session Storage
    sessionStorage.setItem(
        "project",JSON.stringify(project)
    );


    // Read the object from Session Storage
    const savedProject = JSON.parse(
        sessionStorage.getItem("project")
    );


    // Display the information inside a card
    projectCard.innerHTML = `
        <div class="card">

            <h2>${savedProject.subject}</h2>

            <p>
                <strong>Description:</strong>
                ${savedProject.description}
            </p>

            <p>
                <strong>User Types:</strong>
                ${savedProject.userTypes}
            </p>

            <p>
                <strong>Technology Used:</strong>
                ${savedProject.technology}
            </p>

        </div>
    `;


    // Display a success message
    projectMessage.innerHTML =
        "Project saved successfully";

};