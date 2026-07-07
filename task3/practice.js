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

document.write(multiply(3, 4));
document.write("<br>");
document.write(multiply(5, 4));
/*9*/
function canIGetADrivingLicense(age) {

    if (age >= 20) {
        return "yes you can";
    } else {
        return "please come back after " + (20 - age) + " years to get one";
    }

}

document.write(canIGetADrivingLicense(21));
document.write("<br>");
document.write(canIGetADrivingLicense(17));
document.write("<br>");
document.write(canIGetADrivingLicense(20));
/*10*/
function sameLength(str1, str2) {

    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }

}

document.write(sameLength("tree", "clue"));
document.write("<br>");
document.write(sameLength("tree", "car"));
/*11*/
function largerNubmer(num1, num2) {

    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }

}

document.write(largerNubmer(5, 6));
document.write("<br>");
document.write(largerNubmer(5, 3));
/*12*/
function smallerNubmer(num1, num2, num3) {

    if (num1 <= num2 && num1 <= num3) {
        return num1;
    } else if (num2 <= num1 && num2 <= num3) {
        return num2;
    } else {
        return num3;
    }

}

document.write(smallerNubmer(8, 6, 7));
document.write("<br>");

document.write(smallerNubmer(5, 99, 34));
document.write("<br>");

document.write(smallerNubmer(5, 99, 3));
document.write("<br>");

document.write(smallerNubmer(5, 3, 3));
/*13*/
function shorterString(str1, str2, str3, str4, str5) {

    if (str1.length <= str2.length &&
        str1.length <= str3.length &&
        str1.length <= str4.length &&
        str1.length <= str5.length) {

        return str1;

    } else if (str2.length <= str1.length &&
               str2.length <= str3.length &&
               str2.length <= str4.length &&
               str2.length <= str5.length) {

        return str2;

    } else if (str3.length <= str1.length &&
               str3.length <= str2.length &&
               str3.length <= str4.length &&
               str3.length <= str5.length) {

        return str3;

    } else if (str4.length <= str1.length &&
               str4.length <= str2.length &&
               str4.length <= str3.length &&
               str4.length <= str5.length) {

        return str4;

    } else {

        return str5;

    }

}

document.write(shorterString("air", "school", "car", "by", "github"));
document.write("<br>");

document.write(shorterString("air", "tr", "car", "by", "github"));
document.write("<br>");

document.write(shorterString("by", "tr", "car", "air", "github"));
/*14*/
function longerString(str1, str2, str3, str4) {

    if (str1.length >= str2.length &&
        str1.length >= str3.length &&
        str1.length >= str4.length) {

        return str1;

    } else if (str2.length >= str1.length &&
               str2.length >= str3.length &&
               str2.length >= str4.length) {

        return str2;

    } else if (str3.length >= str1.length &&
               str3.length >= str2.length &&
               str3.length >= str4.length) {

        return str3;

    } else {

        return str4;

    }

}

document.write(longerString("air", "school", "car", "github"));
document.write("<br>");

document.write(longerString("air", "schoo", "car", "github"));
document.write("<br>");

document.write(longerString("github", "air", "car", "school"));
document.write("<br>");

document.write(longerString("air", "github", "car", "school"));
document.write("<br>");

document.write(longerString("air", "school", "github", "car"));
document.write("<br>");

document.write(longerString("air", "school", "car", "github"));
/*15*/
function isEven(number) {

    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }

}

document.write(isEven(1));
document.write("<br>");
document.write(isEven(2));
/*16*/
function isOdd(number) {

    if (number % 2 != 0) {
        return true;
    } else {
        return false;
    }

}

document.write(isOdd(4));
document.write("<br>");
document.write(isOdd(5));
/*17*/
function positive(number) {

    if (number < 0) {
        return number * -1;
    } else {
        return number;
    }

}

document.write(positive(4));
document.write("<br>");
document.write(positive(-5));
/*18*/
function fullName(firstName, lastName) {

    return firstName + " " + lastName;

}

document.write(fullName("Adam", "McCallen"));
document.write("<br>");
document.write(fullName("Alex", "Mercer"));
/*19*/
function average(num1, num2, num3, num4, num5) {

    return (num1 + num2 + num3 + num4 + num5) / 5;

}

document.write(average(1, 2, 3, 4, 5));
document.write("<br>");
document.write(average(5, 7, 9, 3, 5));
/*20*/
function randomNumber() {

    return Math.random();

}

document.write(randomNumber());
/*21*/
function randomBetweenNumbers(num1, num2) {

    return Math.random() * (num2 - num1) + num1;

}

document.write(randomBetweenNumbers(1, 8));
document.write("<br>");
document.write(randomBetweenNumbers(3, 100));
/*22*/
function scoreInUniversty(score) {

    if (score >= 95 && score <= 100) {
        return "A";
    } else if (score >= 85 && score <= 94) {
        return "B";
    } else if (score >= 70 && score <= 84) {
        return "C";
    } else if (score >= 50 && score <= 69) {
        return "D";
    } else {
        return "F";
    }

}

document.write(scoreInUniversty(96));
document.write("<br>");

document.write(scoreInUniversty(3));
document.write("<br>");

document.write(scoreInUniversty(71));
/*23*/
let count = 0;

function counter() {

    count++;

    return count;

}

document.write(counter());
document.write("<br>");
document.write(counter());
document.write("<br>");
document.write(counter());
/*24*/
let count = 0;

function counter() {
    count++;
    return count;
}

function resetCounter() {

    let oldCount = count;

    count = 0;

    return oldCount + " and the counter reset now";

}

document.write(counter());
document.write("<br>");

document.write(counter());
document.write("<br>");

document.write(counter());
document.write("<br>");

document.write(resetCounter());
document.write("<br>");

document.write(counter());
document.write("<br>");

document.write(counter());
document.write("<br>");

document.write(resetCounter());
document.write("<br>");

document.write(counter());
