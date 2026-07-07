let month = Number(prompt("Enter your birth month (1-12)"));

switch (month) {

    case 1:
        document.write("January");
        break;

    case 2:
        document.write("February");
        break;

    case 3:
        document.write("March");
        break;

    case 4:
        document.write("April");
        break;

    case 5:
        document.write("May");
        break;

    case 6:
        document.write("June");
        break;

    case 7:
        document.write("July");
        break;

    case 8:
        document.write("August");
        break;

    case 9:
        document.write("September");
        break;

    case 10:
        document.write("October");
        break;

    case 11:
        document.write("November");
        break;

    case 12:
        document.write("December");
        break;

    default:
        document.write("Invalid Month");
}

document.write("<br><br>");
document.write("<br><br>");
/*2*/
let number = 1;

for (let i = 1; i <= 4; i++) {

    for (let j = 1; j <= i; j++) {

        document.write(number + " ");
        number++;
    }

    document.write("<br>");
}

document.write("<br><br>");
document.write("<br><br>");
/*3*/
for (let i = 1; i <= 1000; i++) {

    if (i % 13 == 0) {
        document.write(i + "<br>");
    }

}

document.write("<br><br>");
document.write("<br><br>");
/*4*/
function multiplication2(num1, num2) {

    let result = 0;

    for (let i = 1; i <= num2; i++) {
        result = result + num1;
    }

    return result;
}
document.write(multiplication2(5, 4) + "<br>");
document.write(multiplication2(2, 8) + "<br>");
document.write(multiplication2(7, 6));

document.write("<br><br>");
document.write("<br><br>");
/*5*/
function triangleArea(base, height) {

    return (base * height) / 2;

}
document.write(triangleArea(10, 5));
function isPandigital(number) {

    number = number.toString();

    for (let i = 0; i <= 9; i++) {

        if (!number.includes(i)) {
            return false;
        }

    }

    return true;
}
document.write(isPandigital(98140723568910) + "<br>");
document.write(isPandigital(90864523148909));

document.write("<br><br>");
document.write("<br><br>");
/*5*/
let drink = prompt("Enter your favorite drink");

switch (drink) {

    case "Banana":
        document.write("The price of a banana drink is 20 dollars");
        break;

    case "Orange":
        document.write("The price of an orange drink is 15 dollars");
        break;

    case "Apple":
        document.write("The price of an apple drink is 18 dollars");
        break;

    case "Mango":
        document.write("The price of a mango drink is 25 dollars");
        break;

    case "Lemon":
        document.write("The price of a lemon drink is 10 dollars");
        break;

    default:
        document.write("Drink not available");
}
document.write("<br><br>");
document.write("<br><br>");

/*6*/
function fullName(firstName, lastName) {

    return firstName + " " + lastName;

}

document.write(fullName("Adam", "McCallen"));
document.write("<br>");
document.write(fullName("Alex", "Mercer"));