/* 1 */
const title = document.getElementById("title");

title.onmouseover = function () {
    title.style.backgroundColor = "yellow";
    title.style.fontWeight = "bold";
};

/* 2 */
const country = document.getElementById("country");
const flag = document.getElementById("flag");

country.onchange = function () {
    if (country.value === "jordan") {
        flag.src = "jordan.jpg";
    } 
    else if (country.value === "norway") {
        flag.src = "norway.jpg";
    } 
    else if (country.value === "UK") {
        flag.src = "uk.jpg";
    } 
    else {
        flag.src = "";
    }
};

/* 3 */
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");
const message2 = document.getElementById("message2");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {
    if (password.value.length < 6) {
        message.textContent = "Too short";
        message.style.color = "red";
        message2.textContent = "";
    } 
    else if (confirmPassword.value !== password.value) {
        message.textContent = "";
        message2.textContent = "The two passwords don't match";
        message2.style.color = "red";
    } 
    else {
        message.textContent = "";
        message2.textContent = "";
        alert("Submitted Successfully");
    }
};

/* 4 */


const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.onclick = function () {

        const content = button.parentElement.nextElementSibling;

        if (content.style.display === "block") {

            content.style.display = "none";
            button.textContent = "Show";

        } else {

            content.style.display = "block";
            button.textContent = "Hide";

        }

    };

});
/*5*/
const textBox = document.getElementById("textBox");

const fontFamily = document.getElementById("fontFamily");
const fontSize = document.getElementById("fontSize");

const italic = document.getElementById("italic");
const bold = document.getElementById("bold");
const underline = document.getElementById("underline");


// Change Font Family
fontFamily.onchange = function () {

    textBox.style.fontFamily = fontFamily.value;

};


// Change Font Size
fontSize.onchange = function () {

    textBox.style.fontSize = fontSize.value;

};


// Bold
bold.onchange = function () {

    if (bold.checked) {

        textBox.style.fontWeight = "bold";

    } else {

        textBox.style.fontWeight = "normal";

    }

};


// Italic
italic.onchange = function () {

    if (italic.checked) {

        textBox.style.fontStyle = "italic";

    } else {

        textBox.style.fontStyle = "normal";

    }

};


// Underline
underline.onchange = function () {

    if (underline.checked) {

        textBox.style.textDecoration = "underline";

    } else {

        textBox.style.textDecoration = "none";

    }

};
/* 6 */

const animationBox = document.getElementById("animationBox");

animationBox.onanimationiteration = function () {
    console.log("Animation repeated");
};