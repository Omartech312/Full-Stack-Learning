// Variables: container that hold a value =========================================================

let name = "Omar Rabadan";
let age = 22;
let learning = true;

// Use ` not ' or " when printing variables
console.log(`My name is ${name}`);
console.log(typeof name);

document.getElementById("p1").textContent = `My name is ${name} \nVariable name has data type: ${typeof name}`;
document.getElementById("p2").textContent = `I'm ${age} years old \nVariable age has data type: ${typeof age}`;
document.getElementById("p3").textContent = `I'm currently learning: ${learning} \nVariable learning has data type: ${typeof learning}`;

/*
arithmetic operators =  operands (values, variables) ==============================================
                        operators (+ - * /)
*/

let students = 30;

// addition:      students = students + 1;
// subtraction:   students = students - 1;
// subtraction:   students = students / 2;
// multiplicaiton students = students * 2;

// Augmented assignment operators removes the need to rewrite var = var
// students += 1;
// students -= 1;
// students *= 1;
// students /= 1;

// Decrement and Increment operator
// students++;
// students--;

/*
    operator precendece
    1. parethesis
    2. exponents
    3. multiplcation, division and modulo
    4. addition & subtraction
*/
students += 5;
students = students + 7 * 3 - 1 % 5;
document.getElementById("answer").textContent = students;

// User Input =====================================================================================

/* Window Prompt
let username;
username = window.prompt("What is your username? ");

console.log(`Your name is ${username}`);
*/
let username;

// when mySubmit button is clicked it calls a function
document.getElementById("mySubmit").onclick = function(){

    // the function sets username equal to the value of userInput
    username = document.getElementById("userInput").value;
    // selects the welcome id and sets the text equal to Welcome along with the provided username
    document.getElementById("welcome").textContent = `Welcome ${username}`;

    console.log(username);
}

// Type conversion = change the datatype of a value to another ====================================
//                   strings, numbers and booleans

// This accepts a string data type, so by adding the 1 we essentially append 1 to the given string (example: 45 -> 451)
let userAge;

//When the typeSubmit button is clicked it calls this funciton
document.getElementById("typeSubmit").onclick = function(){
    //The function sets userAge equal to the number provided by the user
    userAge = document.getElementById("numConversion").value;

    document.getElementById("strOutput").textContent = `Before type conversion (String + Number): ${userAge + 1}`;

    document.getElementById("strExplain").textContent = `The user input is initially stored as a string causing the + operator to perform concatenation rather than arithmetic addition.`

    document.getElementById("intOutput").textContent = `After type conversion (Number + Number): ${Number(userAge) + 1}`;

    document.getElementById("intExplain").textContent = `After using Number() both operands are numbers, so the + operator is able to perform numeric addition: ${Number(userAge)} + 1 = ${Number(userAge) + 1}`



}

// if you want to use it as a number you have to use Number(). (exaple 18->19)
userAge = Number(userAge);
userAge += 1;

console.log(userAge, typeof userAge);

// Quick test
let x = "pizza";
let y = "pizza";
let z = 0;

x = Number(x);
y = String(y);
z = Boolean(z);

// Non numerical chars result in NaN (Not a number)
console.log(x, typeof x);
// "pizza" is a string, so nothing happens
console.log(y, typeof y);
// Any value that is not number 0 will be marked as true
console.log(z, typeof z);

// Constants = immutable variable =================================================================

// Once declare you cannot change the value of a constant (security measure to ensure the value always remains the same)
const PI = 3.14159;
let radius;
let circumference;

// Attempting to reassign will result in an error
// PI = 25;

document.getElementById("radButton").onclick = function() {
    radius = document.getElementById("radInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("radFinal").textContent = circumference;
}

