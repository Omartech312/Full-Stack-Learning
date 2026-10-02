console.log("Connect");

// Json is JS object (data-intercahnge format) used to exchange data between server and web app
// Json files {key:value} or [{} , {}, {}]
// JSON.stringify() converts a JS object into a JSON string
// JSON.partse() converts a JSON string to a JS object

fetch("heroes.json")
    .then(response => response.json())
    .then(value => console.log(value))