//console.log("working");

// Function Expression is a way to define functions as values or variables. Which I used in the previous section: Rest & Spread Syntax and Array Methods
// instead of defining a whole function I wrote the code for a function directly the array methods

// Function expressions are commonly used in callbacks for asynchronous operations
// Higher-Order Functions, Closures, Event Listners

function expression(){
    let arr = ["Majin Boo", "Son Gohan", "Son Goku"];
    let expOut = document.getElementById("funcExp");

                // This is the function expression
    arr.forEach(function(character, index, array){
        expOut.innerHTML += `${index+1}: ${character}<br>`;
    });
}
expression();


//arrow functions are a concise way to write function expressions. A good fit for simple functions
// that are only used once (parameters) => some logic
let print = () => document.getElementById("arrOutput").textContent = "This text was printed using an arrow function";
print();


//object is a collection of properties and methods representing real life objects in a sense
const learner = {
    name: "Omar",
    last: "Salgado",
    age: 22,
    activity: "Learning",
    greeting: function(){ document.getElementById("myObjOut").textContent = `Hello, My name is ${learner.name} ${learner.last}`; },
    askAge: function(){ document.getElementById("myObjOut").textContent = `I'm ${learner.age} and always willing to ${learner.activity}`;}
};

// The fact that an object may contain some data doesnt necessary mean that you must use them. However, in most cases you want to only store important data.
// Otherwise, you'll only waste resources.
const hero = {
    name: "Bruce",
    last: "Wayne",
    age: 35,
    activity: "Protecting Gotham",
    greeting: function(){document.getElementById("heroObjOut").textContent = `I'm Batman`;},
    secret: function(){console.log(`My real identity is ${this.name} ${this.last} and my duty is ${this.activity}`);}
};

document.getElementById("Igreet").addEventListener("click", learner.greeting);
document.getElementById("Iage").addEventListener("click", learner.askAge);

document.getElementById("hgreet").addEventListener("click", hero.greeting);
hero.secret();

// Constructor for a car

function Car(model, make, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car = new Car("Fiesta", "Ford", 2016, "Grey");
const neibCar = new Car("Fiesta", "Ford", 2019, "Silver");

console.log(car)
document.getElementById("consOut").textContent = `My Grandparents have a ${car.color} ${car.make} ${car.model} from ${car.year}`;
document.getElementById("constOut").innerHTML = `<br>Jealous by this, their neighbors bought a ${neibCar.color} ${neibCar.make} ${neibCar.model} from ${neibCar.year}`