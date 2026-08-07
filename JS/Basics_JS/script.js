// random section
const rand = document.getElementById("ranButton");
const ranOut = document.getElementById("ranOutput");

rand.onclick = function(){
    let min = Number(document.getElementById("Min").value);
    let max = Number(document.getElementById("Max").value);

    let value = Math.floor(Math.random() * (max - min + 1) + min);

    // if statements share syntax with C. Same goes for tertiary
    if(value > max ){
        console.log("Danger");
    }

    ranOut.textContent = `Generated number: ${value}`;
}

// True/False Assertion

document.getElementById("caseButton").onclick = function(){
    let day = Number(document.getElementById("caseH").value);
    // if statement logic:
    if(day <= 5)
    {
        document.getElementById("ifOutput").textContent =  "Weekday";
    }
    else
    {
        document.getElementById("ifOutput").textContent =  "Weekend";
    }

    // Ternary Operator logic:
    document.getElementById("terOutput").textContent = (day <= 5) ? "Weekday" : "Weekend";

    let output = document.getElementById("swiOutput");
    switch(day)
    {
        case 1:
            output.textContent = "Monday";
            break;
        case 2:
            output.textContent = "Tuesday";
            break;
        case 3:
            output.textContent = "Wednesday";
            break;
        case 4:
            output.textContent = "Thursday";
            break;
        case 5:
            output.textContent = "Friday";
            break;
        case 6:
            output.textContent = "Saturday";
            break;
        default:
            output.textContent = "Sunday";
    }


}

