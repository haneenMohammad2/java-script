// Get the submit button
const submitBtn = document.getElementById("submitBtn");

// Get the message element
const message = document.getElementById("message");

// Get the cards container
const card = document.getElementById("cardsContainer");


// Run the function when the user clicks the submit button
submitBtn.onclick = function () {

    // Get the full name
    const fullName =
        document.getElementById("fullName").value;

    // Get the age
    const age =
        document.getElementById("age").value;

    // Get the selected gender
    const gender =
        document.querySelector(
            'input[name="gender"]:checked'
        );

    // Get the brief description
    const description =
        document.getElementById("description").value;

    // Get the major
    const major =
        document.getElementById("major").value;

    // Get the university
    const university =
        document.getElementById("university").value;

    // Get all selected programming languages
    const checkedLanguages =
        document.querySelectorAll(
            'input[name="languages"]:checked'
        );

    // Create an empty array for the selected languages
    const languages = [];

    // Add each selected language to the array
    checkedLanguages.forEach(function (language) {

        languages.push(language.value);

    });


    // Check if the user selected a gender
    if (gender == null) {

        message.innerHTML =
            "Please choose your gender";

        return;
    }


    // Check if the user selected at least 3 languages
    if (languages.length < 3) {

        message.innerHTML =
            "Please choose at least 3 languages";

        return;
    }


    // Create an object containing the user's information
    const person = {

        fullName: fullName,

        age: age,

        gender: gender.value,

        description: description,

        major: major,

        university: university,

        languages: languages

    };


    // Convert the object to a string and save it in local storage
    localStorage.setItem(
        "person",
        JSON.stringify(person)
    );


    // Read the saved information from local storage
    const savedPerson = JSON.parse(
        localStorage.getItem("person")
    );


    // Display the saved information inside a card
    card.innerHTML = `
        <div class="card">

            <h2>${savedPerson.fullName}</h2>

            <p>Age: ${savedPerson.age}</p>

            <p>Gender: ${savedPerson.gender}</p>

            <p>
                Description:
                ${savedPerson.description}
            </p>

            <p>Major: ${savedPerson.major}</p>

            <p>
                University:
                ${savedPerson.university}
            </p>

            <p>
                Languages:
                ${savedPerson.languages.join(", ")}
            </p>

        </div>
    `;


    // Display a success message
    message.innerHTML =
        "Information saved successfully";

};