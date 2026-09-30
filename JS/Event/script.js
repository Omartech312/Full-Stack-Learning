console.log("Connected");

// eventListener creates interactive web pages

// Events related to mouse: click, mouseover, mouseout
document.getElementById("box1").addEventListener("click", event => {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 😭";
});

document.getElementById("box1").addEventListener("mouseover", event => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Please do not click! 😨";
})

document.getElementById("box1").addEventListener("mouseout", event => {
    event.target.style.backgroundColor = "rgb(108, 228, 120)";
    event.target.textContent = "Do not Click me 🤪";
})


// Events related to keys: keydown, keyup

const movBox = document.getElementById("box2");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {
    if(event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        box2.style.top = `${y}px`;
        box2.style.left = `${x}px`;
    }
    //console.log(event.key);
})