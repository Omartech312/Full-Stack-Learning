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
    let ifOutput = "";

    if(day == 1)
    {
        ifOutput =  "Monday";
    }
    else if(day == 2)
    {
        ifOutput = "Tuesday"; 
    }
    else if(day == 3)
    {
        ifOutput = "Wednesday";
    }
    else if(day == 4)
    {
        ifOutput = "Thursdays";
    }
    else if(day == 5)
    {
        ifOutput = "Friday";
    }
    else if(day == 6)
    {
        ifOutput = "Saturday";
    }
    else if(day == 7)
    {
        ifOutput = "Sunday";
    }
    else
    {
        ifOutput = "Invalid Number"
    }
    document.getElementById("ifOutput").textContent = ifOutput;

    // Ternary Operator logic:
    document.getElementById("terOutput").textContent = (day <= 7 && day >= 1) ? ((day <= 5) ? "Weekday" : "Weekend") : "Invalid Number";

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
        case 7:
            output.textContent = "Sunday";
            break;
        default:
            output.textContent = "Invalid Number";
    }   
}

// String handling
document.getElementById("strButton").onclick = function(){
    const name = document.getElementById("nameInput").value;

    if(!name.includes(' ')){
        document.getElementById("strOutput").textContent = `Please write both your first name and last name: ${name}, ${name.indexOf(' ')}`;
    }
    else{
        document.getElementById("strOutput").textContent = `Your Last Name is ${name.slice(name.indexOf(' '), name.length)}, Your First Name is ${name.slice(0, name.indexOf(' '))}, and finally your initials are ${name.charAt(0)}.${name.charAt(name.indexOf(' ') + 1)}.`
    }
}

let guessNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let guessOut = document.getElementById("guessOutput");
let tries = 5;

document.getElementById("guessRestart").onclick = function(){
    guessNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    guessOut.textContent = "";
    tries = 5;

}

document.getElementById("guessButton").onclick = function(){
    let guess = Number(document.getElementById("guess").value);

    if(tries > 0){
        if(guess > guessNum){
            guessOut.textContent = `Your Guess is too High, you have ${tries} more guesses.`;
        }
        else if(guess < guessNum){
            guessOut.textContent = `Your guess is too Low, you have ${tries} more guesses.`;
        }
        else{
            guessOut.textContent = "You Won!";
        }
    }
    else{
        guessOut.textContent = "You Lost"
    }

    tries--;
}

