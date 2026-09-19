
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

function each(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

}