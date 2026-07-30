// Variables: container that hold a value

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
arithmetic operators =  operands (values, variables)
                        operators (+ - * /)
*/