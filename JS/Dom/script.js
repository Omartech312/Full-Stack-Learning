console.log("Connected");

// DOM is an objct thar represents th page you see int he web browser and provides an API to interact with it.
// It is constructed when it loads the HTML doc and structures the elements in a tree representation.
// JS can acces DOM to dynamically change content, struct, and style of the web page.

// in this I'll be mimicking a guest as no "users" exist
const user = "";

const welcomeM = document.getElementById("wel-ms");

welcomeM.textContent += user === "" ? 'Guest' : user;

console.dir(document);

// Dom also allows for changes to styles through JS.
document.body.style.backgroundColor = "black";
document.body.style.color = "white";


// element selectors are methods used to target and manipulate HTML elements which allows for the selection of one or more HTML elements from DOM
// the one that I've used the most is getElementById(), but there is also:
// getElementClassName()  HTML Collection. forEach does not work. use for X in collection.
// getElementByTagName()  HTML Collection
// querySelector()           First element or NULL 
// querySelectorAll()     Node list

// One important thing to keep in mind is that camel case is used. Where in CSS hyphenated naming convetion is used.

// Formatting h1 as usual 
const h1Element = document.getElementsByTagName("h1");
// index 0 as this function returns an HTML collection, so indexing is required to modify values
h1Element[0].style.color = "rgb(0, 182, 254)";
h1Element[0].style.textAlign = "center";


const h4Element = document.getElementsByTagName("h4");
//takes each h4 tag and sets the color violet?
// im not really sure what color this is, but it looks fantastic (in my opinion)
for(let element of h4Element){
    element.style.color = "hsl(298, 100%, 72%)";
}

// alternatively you can convert the collection into an array
const animals = document.getElementsByClassName("animal");
Array.from(animals).forEach(animal => {
    animal.style.backgroundColor = "hsl(16, 100%, 66%)";
})
//moves second element of animals
animals[1].style.textAlign = "center";


const firstElement = document.querySelector(".querySearch");
firstElement.style.backgroundColor = "yellow";
firstElement.style.color = "red"

// querySelectorAll creates a node list which does have forEach method, so no need to use Array.from()
const vegetables = document.querySelectorAll(".vegetable");

vegetables.forEach(vegetable => {
    vegetable.style.backgroundColor = "hsl(144, 88%, 61%)";
    vegetable.style.color = "gray";
})
vegetables[1].style.textAlign = "center";



// DOM Navigation is moving through the structure of an HTML doc using JS

/*
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.Children
*/
// selects the mexican id then its first child followed by the next (second child)
const mexFood = document.getElementById("mexican");
const firstChild = mexFood.firstElementChild;

//sets colors to a green(ish) and red colors
firstChild.style.color = "hsl(144, 88%, 61%)";
firstChild.nextElementSibling.style.color = "red";

// selects fast id then its last child (3rd) followed by the previous (second child)
const fastFood = document.getElementById("fast");
const lastChild = fastFood.lastElementChild;

//sets colors to skyblue and purple
lastChild.style.color = "skyblue";
lastChild.previousElementSibling.style.color = "purple";


// selects ice cream then goes to the parent through parentElement and changes the background color to blue and  
const parent = document.getElementById("ice").parentElement;
parent.style.backgroundColor = "hsl(220, 100%, 57%)";
// the border radius to 10px basically making the edges round
parent.style.borderRadius = "10px";


//Selects the third child of mexFood and sets color to gray
const children = mexFood.children[2];
children.style.color = "gray";



// Add and Change HTML
// The creation and appeding of HTML elements can be compressed into the following 3 steps:

// STEP 1: create the element
const newEle = document.createElement("p");

// Step 2: Add attributes/properties
newEle.textContent = "I love Gaming";
newEle.id = "hobbie";
newEle.style.color = "tomato";
newEle.style.textAlign = "center";
newEle.style.fontSize = "1.5em";

// Step 3: append elemnt to DOM
//append adds to the end
//prepend adds to the start
document.getElementById("box2").append(newEle);

// example to remove 
