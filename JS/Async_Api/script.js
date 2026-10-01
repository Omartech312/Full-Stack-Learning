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

function get(callback){
    setTimeout(() => {
        console.log("You got everything!");
        callback();
    }, 7000);
}

function addCereal(callback){
    setTimeout(() => {
        console.log("after a few seconds of adding cereal, you are ready to add Milk!");
        callback();
    }, 3000);
}

function addMilk(callback){
    setTimeout(() => {
        console.log("");
        callback("You're set, Enjoy!");
    }, 2000);
}