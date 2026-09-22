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
// Constructors are neat for reusability, and are very similar to structures in both purpose and use.
function Car(model, make, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color
}

const car = new Car("Fiesta", "Ford", 2016, "Grey");
const neibCar = new Car("Fiesta", "Ford", 2019, "Silver");

//console.log(car)
document.getElementById("consOut").textContent = `My Grandparents have a ${car.color} ${car.make} ${car.model} from ${car.year}`;
document.getElementById("constOut").innerHTML = `<br>Jealous by this, their neighbors bought a ${neibCar.color} ${neibCar.make} ${neibCar.model} from ${neibCar.year} <br>`;

// Classes provide a claner way to organize a constructor

class Product{

    static productCount = 0;

    constructor(name, price, quantity, metric){
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.metric = metric;
        //When a new product is added then the product count is incremented
        Product.productCount++;
    }
    displayProduct(){
        return `${this.quantity} ${this.metric} of ${this.name} for $${this.price}`;
    }
}

const eggs = new Product("egg", 5.99, 12, "units");
const milk = new Product("milk", 7.99, 1, "gallon");
const ramen = new Product("ramen", 3.5, 6, "packs");

const display = [eggs, milk, ramen];

document.getElementById("classInY").addEventListener("click", () => {
    // gets and clears the output tag
    let strOutput = document.getElementById("classOut");
    strOutput.innerHTML = `We currently have the following ${Product.productCount} options: <br>`;

    // loops through the array using static variable as the ending point
    for(let i = 0; i < Product.productCount; i++){
        strOutput.innerHTML += `- ${display[i].displayProduct()} <br>`;
    }
    strOutput.innerHTML += "<br>These values are displayed thanks to an array of objects and static variables";
});

document.getElementById("classInN").addEventListener("click", () => {
    document.getElementById("classOut").textContent = "Ok, Have a nice day!";
});


// static is a keyword that defines properties or methods that belong to a class itself
// rather than the objects created fromt hat class (The class owns statics, not the objects)
/*
class MathUtilities{
    //static property
    static PI = 3.1415;
    static getCircumference(radius){
        return 2 * this.PI * radius; }
    static getArea(radius){
        return this.PI * radius * radius; }
}
console.log(MathUtilities.PI);
console.log(MathUtilities.getCircumference(10));
console.log(MathUtilities.getArea(10));
*/

class Animal{
    alive = true;

    eat(){
        if(this.alive){
            return `${this.name} is eating`;
        }
        return `Unfortunely ${this.name} is no longer alive`;
    }
    sleep(){
        if(this.alive){
            return `${this.name} is sleeping`;
        }
        return `Unfortunely ${this.name} is no longer alive`;
    }
}

class Rabbit extends Animal{
    name = "rabbit";
}

class Hawk extends Animal{
    name = "hawk";
}

const rabbit = new Rabbit();
const hawk = new Hawk();

// The hawk then comes and unalives the rabbit
rabbit.alive = false;