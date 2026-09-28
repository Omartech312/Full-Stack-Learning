console.log("Connected");

// DOM is an objct thar represents th page you see int he web browser and provides an API to interact with it.
// It is constructed when it loads the HTML doc and structures the elements in a tree representation.
// JS can acces DOM to dynamically change content, struct, and style of the web page.

// in this I'll be mimicking a guest as no "users" exist
const user = "";

const welcomeM = document.getElementById("wel-ms");

welcomeM.textContent += user === "" ? 'Guest' : user;

console.dir(document);