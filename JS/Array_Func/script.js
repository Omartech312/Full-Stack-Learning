
function spreadF(){
    forE(...[1,2,3], 4,6,8);
}

function forE(...values){
    console.log(values);

    values.forEach(display);
}

function display(item){
    console.log(item);
}