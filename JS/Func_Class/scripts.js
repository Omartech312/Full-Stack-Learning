console.log("working");

// Function Expression is a way to define functions as values or variables. Which I used in the previous section: Rest & Spread Syntax and Array Methods
// instead of defining a whole function I wrote the code for a function directly the array methods

function expression(){
    let arr = ["Majin Boo", "Son Gohan", "Son Goku"];
    let expOut = document.getElementById("funcExp");

    arr.forEach(function(character, index, array){
        expOut.innerHTML += `${index+1}: ${character}<br>`;
    });
}

expression();