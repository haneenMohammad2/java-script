function tellFortune(jobTitle, geographicLocation, partnerName, numberOfChildren) {

    document.write("You will be a " + jobTitle +
        " in " + geographicLocation +
        ", and married to " + partnerName +
        " with " + numberOfChildren + " kids.");

}
tellFortune("software engineer", "Jordan", "Alice", 3);
/*2*/
function calculateDogAge()
{
let dogAge = age * 7;

    document.write("Your doggie is " + dogAge + " years old in dog years!");

}
calculateDogAge(1);
/*3*/
function calculateSupply(age, amountPerDay) {

    let maxAge = 100;
    let yearsLeft = maxAge - age;
    let totalDays = yearsLeft * 365;
    let totalAmount = totalDays * amountPerDay;

    document.write("You will need " + totalAmount +
        " cups of tea to last you until the ripe old age of " + maxAge);

}

calculateSupply(30, 3);
/*4*/
function greet(name) {

    return "Hello " + name;

}

document.write(greet("Adam"));
/*5*/
/* 1) Error:
   The parameter is named "cat", but the function uses "x".
   It should use the same parameter name.


function double(cat) {
    return 2 * cat;
}


/* 2) Error:
   A parameter cannot be a number like (7).
   It must be a variable name.
*/

function double(x) {
    return 2 * x;
}


/* 3) Error:
   A parameter cannot be a string like ('7').
   Also, 'x' should be x without quotes.
*/

function double(x) {
    return 2 * x;
}
/*6*/
/* Fixed Function 1 */

function double1(x) {
    return 2 * x;
}

/* Fixed Function 2 */

function double2(x) {
    return 2 * x;
}

/* Fixed Function 3 */

function double3(x) {
    return 2 * x;
}
/*7*/
function cube(number) {

    return number * number * number;

}

document.write(cube(4));
/*8*/
function multiply(num1, num2) {

    return num1 * num2;

}

document.write(multiply(5, 4));
