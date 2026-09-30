console.log("Connected");

// eventListener creates interactive web pages: click mouseover, mouseout

// WHen the button is clicked changes the background color
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