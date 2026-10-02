// Synchronous executes line by line consecutively in sequence. Code that aits for an operation to complete


//Asynchronous allows multiple operations to be perform without waiting and doesnt block the exection flow.
// (I/O operations, network requests, fetching data, Handled with callbacks, promises and Async/Await)

const output = document.getElementById("asynOut");

function chores(callback){
    let time = 0;
    
    //Laundry
    time += 5;
    output.textContent = `If you start doing your chores at 3:00, you can have the washing machine running by 3:0${time}`;
    callback(time);

    //sweep
    time += 15;
    output.innerHTML += `<br>- Sweeping is complete at 3:${time}`;

    //Mop
    time += 25;
    output.innerHTML += `<br>- Mopping is complete at 3:${time}`;
}

function laundry(time){
    // setTimeout function allows for Asynchronous work. In this case it simulates the washing machine working on the background as it is called right after starting the washing machine
    setTimeout(() => {
        time += 50;
        output.innerHTML += `<br>- Laundry is complete at 3:${time}`;

        output.innerHTML += `<br><br>Notice how, even though sweeping and mopping require your active attention, the laundry can continue asynchronously while you work on other chores.`;
    }, 1000);
}

chores(laundry);

// Callback hell is a situation where callbaks are nested witin other callbacks making the code 
// difficult to read. Its better to use Promises and async/await to aboid these kind of situations.

const hellOut = document.getElementById("callbackH");

function process1(callback){
    setTimeout(() => {
        hellOut.innerHTML = "- Task 1 is complete: Data Extraction";
        callback();
    }, 2000);
}

function process2(callback){
    setTimeout(() => {
        hellOut.innerHTML += "<br>- Task 2 is complete: Data Validation";
        callback();
    }, 1500);
}

function process3(callback){
    setTimeout(() => {
        hellOut.innerHTML += "<br>- Task 3 is complete: Data Analysis";
        callback();
    }, 750);
}

function process4(callback){
    setTimeout(() => {
        hellOut.innerHTML += "<br>- Task 4 is complete: Storing Findings";
        callback();
    }, 1250);
}

function process5(){
    setTimeout(() => {
        hellOut.innerHTML += "<br>- Task 5 is complete: Reporting results";
    }, 250);
}

process1(() => {
    process2(() => {
        process3(() => {
            process4(() => {
                process5();
            });
        });
    });
});

// Promises are objects that manage asynchronous operations.
// EX: I promise to return a value
//     Pending -> resolved or rejected
//      new Promise((resolve, reject) => {asynchronous code})

// task: prepare cereal

//1: get bowl, spoon, cereal, milk
//2: add cereal to bowl (YES CEREAL FIRST)
//3: add milk to bowl
//4: ENJOY!

let tv = false;
let console = false;
const screen = document.getElementById("tv");
const light = document.getElementById("light");

document.getElementById("tvButton").addEventListener("click", () => {
    if(!tv){
        tv = true;
        decideDisplay();
    }
    else{
        tv = false;
        screen.src = "../../CSS/images/off.jpg";
    }
});

document.getElementById("consoleButton").addEventListener("click", () => {
    if(!console){
        console = true;
        light.style.backgroundColor = "lightgreen";
        decideDisplay();
    }
    else{
        console = false;
        light.style.backgroundColor = "red";
        decideDisplay();
    }
});

function decideDisplay(){
    if(tv){
        if(console){
            screen.src = "../../CSS/images/gow.webp";
        }
        else{
            screen.src = "../../CSS/images/signal.webp";
        }
    }
}

function checkTV(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(tv){
                resolve("<br>TV is ready");
            }
            else{
                reject("<br>Dont forget to turn on the TV! ");
            }
        }, 1000);
    });
}

function checkConsole(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(console){
                resolve("<br> Console is ready to play");
            }
            else{
                reject("<br>Dont forget to turn on your console!");
            }
        }, 1000);
    });
}

const playOut = document.getElementById("promiseOut");
function play(){
    return new Promise((resolve, reject) => {
        resolve("You grab your favorite drink and snack");
    });
}
function allset(){
    return new Promise((resolve, reject) => {
        resolve("<br>You're ready for a long session, Enjoy!");
    });
}

document.getElementById("play").addEventListener("click", () => {
    play().then(value => {playOut.innerHTML = value; return checkTV()})
            .then(value => {playOut.innerHTML += value; return checkConsole()})
            .then(value => {playOut.innerHTML += value; return allset()})
            .then(value => {playOut.innerHTML += value;})
            .catch(error => {playOut.innerHTML += (error)});
});
