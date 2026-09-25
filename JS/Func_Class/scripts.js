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
            return `${this.name} eats`;
        }
        return `Unfortunely ${this.name} is no longer alive`;
    }
    sleep(){
        if(this.alive){
            return `${this.name} sleeps`;
        }
        return `Unfortunely ${this.name} is no longer alive`;
    }
}

//Thiese classes inherit eat and sleep from the Animal calss
class Rabbit extends Animal{
    name = "rabbit";
}

class Hawk extends Animal{
    name = "hawk";
}

const rabbit = new Rabbit();
const hawk = new Hawk();


document.getElementById("story").addEventListener("click", () => {
    rabbit.alive = true;
    let outP = document.getElementById("storyOut");
    outP.textContent = "";


    outP.innerHTML += `On a regular day like any other you found a strangely friendly ${rabbit.name}<br>`;
    outP.innerHTML += `You feed him, and so the ${rabbit.eat()} <br>`;
    outP.innerHTML += `After a feast the rabbit looks tired, and so the ${rabbit.sleep()} <br>`;
    outP.innerHTML += `You take care of this little fellow for a couple of month <br>`;
    outP.innerHTML += `One cloudy morning, you let your rabbit rest on the backyard<br>`;
    outP.innerHTML += `a couple of hours later you find no traces of your companion.<br>`;
    rabbit.alive = false;
    outP.innerHTML += `What you don't know is that a ${hawk.eat()} just a couple miles away from you<br>`;
    outP.innerHTML += `In agony you leave food outside just in case, but ${rabbit.sleep()}`;
});

// Super is used in classes to call the cosntructor or access the properties and methods of a parent
// this = this class
// super = the parent

class Honda{
    make = "Honda";

    constructor(year, color, wheels){
        this.year = year;
        this.color = color;
    }
}

class Civic extends Honda{
    model = "Civic";
    
    constructor(year, color, wheels, luxuryLevel){
        //reuses the parent's contructor for year and color
        super(year, color, wheels);
        this.luxuryLevel = luxuryLevel;
    }

    advertise(){
        return `${this.color} ${this.make} ${this.model}, ${this.year}, ${this.luxuryLevel} model <br>`;
    }
}

class Accord extends Honda{
    model = "Accord";

    constructor(year, color, wheels, cylinders){
        super(year, color, wheels);
        this.cylinders = cylinders;
    }
    advertise(){
        return `${this.color} ${this.make} ${this.model}, ${this.year}, ${this.cylinders} cylinders <br>`
    }
}

class CR extends Honda{
    model = "CR";

    constructor(year, color, wheels, classification){
        super(year, color, wheels);
        this.classification = classification;
    }
    advertise(){
        return `${this.color} ${this.make} ${this.model}, ${this.year}, ${this.classification} <br>`
    }
}

let civic = new Civic(2020, "Red", 4, "Luxury");
let accord = new Accord(2024, "Grey", 4, 6);
let bike = new CR(2026, "SIlver", 2, "SuperSport");

document.getElementById("superOut").innerHTML = `- ${civic.advertise()}- ${accord.advertise()}- ${bike.advertise()}`;

// Setters, Getters and Private Properties
// getter is a special method that makes a property readable
// setter is a special method that makes a property writeable

// validate and modify a value when reading/writing a property


class Cypher{
    #message
    #shift

    constructor(message, shift){
        this.message = message;
        this.shift = shift;
    }

    set message(newMessage){
        if(typeof(newMessage) === "string" && newMessage.length > 0){
            this.#message = newMessage;
            document.getElementById("encryOut").textContent = this.encryption;
        }
        else{
            document.getElementById("encryOut").innerHTML = "Please Provide a proper String";
        }

    }

    set shift(newNumber){
        if(Number(newNumber) >= 0){
            this.#shift = Number(newNumber);
            document.getElementById("encryOut").textContent = this.encryption;
        }
        else{
            document.getElementById("encryOut").innerHTML = "Please Provide a valid Positive whole number";
        }
    }

    get message(){
        return this.#message;
    }

    get shift(){
        return this.#shift;
    }

    get encryption(){
        let encryption = "";
        for(let i = 0; i < this.#message.length; i++){
            if(this.#message[i] != ' '){
                let code = this.#message[i].charCodeAt(0);
                code = ((code - 65 + this.#shift) % 26) + 65
                encryption += String.fromCharCode(code);
            }
            else{
                encryption += ' ';
            }
        }
        return encryption;
    }
}

let encryption = new Cypher("ATTACK AT DAWN", 3);
document.getElementById("encryOut").textContent = encryption.encryption;

document.getElementById("encryptButton").addEventListener("click", () => {
    encryption.message = document.getElementById("encryptIn").value;
});

document.getElementById("shiftButton").addEventListener("click", () =>{
    encryption.shift = document.getElementById("shiftIn").value;
})

// Destructuring is when you extract values from arrays and objects to then reassign them to variables in convinient ways.
// [] for array destructuring
// {} ofr object destructuring

// examples:
console.log("Below are examples of Destructuring");

    //variables
let a = 15;
let b = 20;

[a,b] = [b,a];
console.log(`a is ${a}, and b is ${b}`);

    // arrays

let arr = ["First", "Second", "Third", "Fourth", "Fifth"];
// swaps index 0 with 4. Can be a neat way of swapping without a temp var
[arr[0], arr[4]] = [arr[4], arr[0]];
console.log(arr);

    // arrays and variables

let characterArr = ["Goku", "Naruto", "Dr.House", "Walter W.", "Guts", "Rock Lee"];

const [dragonBall, Naruto, House, Breaking, ...others] = characterArr;
console.log(`Dragon ball: ${dragonBall}\nBoruto: ${Naruto}\nMedicine: ${House}\nBreaking Bad: ${Breaking}\nOthers: ${others}`);

const McLovin = {
    first: "McLOVIN",
    age: 25,
    job: "CEO of Superbad",
    personality: "Hustler"
}

displayChar(McLovin);

function displayChar({firstName, Age, Job, personality}){
    document.getElementById("displayOut").innerHTML = `One of the greatest characters in movies is ${firstName}, ruling with world with only ${Age} years of age. His position as the ${Job} combined with his ${personality} traits ensure his success.`
}