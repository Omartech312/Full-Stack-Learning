
function Rest(){
    let user1 = document.getElementById("user1I").value;
    let user2 = document.getElementById("user2I").value;
    let user3 = document.getElementById("user3I").value;    
    
    forE(user1, user2, user3);
}

// Rest operator compacts the different users into an array values
function forE(...values){

    // Spread operator now unpacks the users and displays them
    document.getElementById("spreadOut").textContent = values;
    
    let eaOut = document.getElementById("eachOut");
    eaOut.innerHTML = "";
    console.log(values);

    values.forEach(function display(item, index, array){
        if(item.length > 0) eaOut.innerHTML += `- User #${index+1}: ${item}<br>`;
        else{
            eaOut.innerHTML += `- User #${index+1}: Does not exist, Please provide a proper name <br>`;
        }
        array[index][0] = array[index].charAt(0).toUpperCase();
    });
    console.log(...values);
}