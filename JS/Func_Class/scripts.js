console.log("working");

// Function Expression is a way to define functions as values or variables. Which I used in the previous section: Rest & Spread Syntax and Array Methods
// instead of defining a whole function I wrote the code for a function directly the array methods

// Function expressions are commonly used in callbacks for asynchronous operations
// Higher-Order Functions, Closures, Event Listners

function expression(){
    let arr = ["Majin Boo", "Son Gohan", "Son Goku"];
    let expOut = document.getElementById("funcExp");

    arr.forEach(function(character, index, array){
        expOut.innerHTML += `${index+1}: ${character}<br>`;
    });
}
expression();


let print = () => console.log("test");

//arrow functions are a concise way to write function expressions. A good fit for simple functions
// that are only used once (parameters) => some logic