import {circumference, area, volume, surface} from './utilities.js';

// ES6 Modules in JS its just import. Which, allows you to take functions from one file into another.

document.getElementById("modulesButton").addEventListener("click", () => {
    let radius = Number(document.getElementById("modules").value);
    let out = document.getElementById("modulesOut");
    
    if(typeof radius === "number" && radius >= 0){
        out.innerHTML = `Circle <br>Circumfenrence: ${circumference(radius).toFixed(2)}<br>Area: ${area(radius).toFixed(2)}
                    <br><br>Sphere<br>Surface Area: ${surface(radius).toFixed(2)}<br>Volume: ${volume(radius).toFixed(2)}`;
    }
    else{
        out.textContent = "Please provide a number higher than 0";
    }
})

// Error is an object created to represent a problem that occurs. It can be related to user Input or connection.

// In this case two different cases will be accounted for: dividing by 0 and lacking user input

document.getElementById("errorButton").addEventListener("click", () => {
    try{
        let dividend = Number(document.getElementById("dividend").value);
        let divisor = Number(document.getElementById("divisor").value);

        if(isNaN(dividend) || isNaN(divisor)){
            throw new Error("Input Must be a number");
        }
        if(divisor == 0){
            throw new Error("Division by 0 is not allow. Please try with a different number");
        }

        document.getElementById("divOut").textContent = `Result: ${dividend / divisor}`;
    }
    catch(error){
        document.getElementById("divOut").textContent = `${error}`;
    }
    finally{
        console.log("Division is complete");
    }
})