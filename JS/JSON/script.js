console.log("Connect");

// Json is JS object (data-intercahnge format) used to exchange data between server and web app
// Json files {key:value} or [{} , {}, {}]
// JSON.stringify() converts a JS object into a JSON string
// JSON.partse() converts a JSON string to a JS object

const chars = document.getElementById("characters");

// fetches data from JSON file
fetch("heroes.json")
    //creates the json objects
    .then(response => response.json())
    // iterates through the differeny json objects
    .then(values => values.forEach(element => {
        // adds the name and age of super heors to characters <p>
        chars.innerHTML += `${element.name} is ${element.age} years old and has the following Super Powers:<br>`;

        //traverses each superpower of the current hero and adds it to the output
        for(power of element.superPowers){
            chars.innerHTML += `- ${power}<br>`;
        }

        // finally adds a space in between each superheroes
        chars.innerHTML += "<br>";
    }));