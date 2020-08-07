const btn = document.querySelector("button");
const background = document.getElementsByClassName("color")[0];


function changeBgColor() {
    background.style.background = "yellow";
}

btn.addEventListener("click", changeBgColor);