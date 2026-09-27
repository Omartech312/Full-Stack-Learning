import {PI, circumference, area, volume, surface} from './utilities.js';


console.log(PI);

document.getElementById("modulesButton").addEventListener("click", () => {
    let radius = document.getElementById("modules").value;
    document.getElementById("modulesOut").innerHTML = `Circle <br>Circumfenrence: ${circumference(radius).toFixed(2)}<br>
    Area: ${area(radius).toFixed(2)}<br><br>Sphere<br>Surface Area: ${surface(radius).toFixed(2)}<br>Volume: ${volume(radius).toFixed(2)}`;
})

console.log("Connected");