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

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("userInput").value;
    document.getElementById("welcome").textContent = `Welcome ${username}`;
    console.log(username);
}

// Type conversion = change the datatype of a value to another ====================================
//                   strings, numbers and booleans

// This accepts a string data type, so by adding the 1 we essentially append 1 to the given string (example: 45 -> 451)
let userAge = window.prompt("How old are you?");

//if you want to use it as a number you have to use Number(). (exaple 18->19)
userAge = Number(userAge);
userAge += 1;

console.log(userAge, typeof userAge);

//Quick test
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

