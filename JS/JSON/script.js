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

// list of APIs in case I decide to work with something more significant:  https://public-api-lists.github.io/public-api-lists/ 

async function pokemon(){
    //API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
    console.log(response);
}

document.getElementById("pokeBut").addEventListener("click", () => {
    const pokemon = document.getElementById("Pokemon").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => response.json())
        .then(data => {
            const output = document.getElementById("display");
            output.innerHTML = `<p id="name">Name: ${data.name} (${data.id})</p>`;
            output.innerHTML += `<img id="sprite" src="${data.sprites.front_default}" >`;
            console.log(data);
        })
        .catch(error => console.error(error));
});

