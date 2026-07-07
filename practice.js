let num1 = Number(prompt("Please Enter the First Number"));
let num2 = Number(prompt("Please Enter the Second Number"));
let operation = prompt("Please Enter your Operation (+, -, *, /)");

let result;

switch (operation) {
    case "+":
        result = num1 + num2;
        break;

    case "-":
        result = num1 - num2;
        break;

    case "*":
        result = num1 * num2;
        break;

    case "/":
        result = num1 / num2;
        break;

    default:
        result = "Invalid operation";
}
/*2*/
let mark = 80;

if (mark < 50) {
    document.write("FAIL");
}
else if (mark >= 50 && mark <= 59) {
    document.write("D");
}
else if (mark >= 60 && mark <= 69) {
    document.write("C");
}
else if (mark >= 70 && mark <= 79) {
    document.write("B");
}
else if (mark >= 80 && mark <= 89) {
    document.write("A");
}
else if (mark >= 90 && mark <= 100) {
    document.write("A+");
}
else {
    document.write("Invalid Mark");
}
/*3*/
let radius = 5;

let area = Math.PI * radius * radius;

document.write("Radius = " + radius + "<br>");
document.write("Area = " + area);
/*4*/
console.log(result);
document.write(`${num1} ${operation} ${num2} = ${result}`);
let x = Number(prompt("Please Enter x"));
let y = Number(prompt("Please Enter y"));

if (x > y) {

    alert("Hello World");
    console.log("Hello World");
     document.write("Hello World");

}
else {

    alert("Goodbye");
    console.log("Goodbye");
   document.write("Goodbye");

}