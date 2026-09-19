
function Rest(){
    let user1 = document.getElementById("user1I").value;
    let user2 = document.getElementById("user2I").value;
    let user3 = document.getElementById("user3I").value;    
    if(user1 && user2 && user3){
        spread(user1, user2, user3);
    }
    else{
        document.getElementById("spreadOut").textContent = "Make sure you provide an input for all three users";
    }
}

// Rest operator compacts the different users into an array values
function spread(...values){

    // Spread operator now unpacks the users and displays them
    for(let i = 0; i < 3; i++){
        values[i] = values[i][0].toUpperCase() + values[i].slice(1);
        if(i > 0){

        }
    }

    display(...values);
}

function display(u1, u2, u3){
    document.getElementById("spreadOut").innerHTML =  `User1: ${u1} <br>User2: ${u2}<br>User3: ${u3}`;
}

// clearing Rest/Spread
function RestClear(){
    document.getElementById("spreadOut").innerHTML = "";
}


function forea(){
    // clears previous text from the website when new one is submit
    document.getElementById("eaOut").textContent = "";
    document.getElementById("mapOut").textContent = "";
    document.getElementById("filterOut").textContent = "";
    document.getElementById("reduceOut").textContent = "";

    let num1 = Number(document.getElementById("each1").value);
    let num2 = Number(document.getElementById("each2").value);
    let num3 = Number(document.getElementById("each3").value);

    if(num1 && num2 && num3){
        let array = [num1, num2, num3];
        //console.log(array);

        // forEach() method section
        let eaOut = document.getElementById("eaOut");
        
        array.forEach(function(number){
            eaOut.innerHTML += `${number*2}<br>`;
        })

        // map() method section
        let mapOut = document.getElementById("mapOut");
        let squared = array.map(function(number){
            return number * number;
        })

        for(let i = 0; i < squared.length; i++){
            mapOut.innerHTML += `${squared[i]}<br>`;
        }
        
        // filter() method section
        let filOut = document.getElementById("filterOut");
        filOut.innerHTML = "Your even Inputs are: "

        // Creates another array with elements that fullfil certain standards
        let even = array.filter(function(number){
            return number % 2 === 0;
        })

        for(let i = 0; i < even.length; i++){
            filOut.innerHTML += `${even[i]}`;
            if(Number(i) != Number(length - 1)){
                filOut.innerHTML += ', ';
            }
        }
        console.log(even);

        // reduce() method section
        let redOut = document.getElementById("reduceOut");

        let product = array.reduce(function(accumulator, currentValue){
            return accumulator + currentValue;
        })

        redOut.innerHTML = product;


    }
    else{
        document.getElementById("eaOut").textContent = "Please Provide 3 valid Numbers";
    }

}

function methodClear(){
    document.getElementById("reduceOut").innerHTML = "";
    document.getElementById("eaOut").innerHTML = "";
    document.getElementById("mapOut").innerHTML = "";
    document.getElementById("filterOut").innerHTML = "";
}