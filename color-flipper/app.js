const btn = document.querySelector("button");
const background = document.getElementsByClassName("color")[0];

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

function changeBgColor() {
    let color = "#"
    for (let i = 0; i < 6; i++) {
        let num = Math.floor(Math.random() * hex.length)
        color += hex[num];
    }
    background.style.background = color;
    btn.style.background = color;
}

btn.addEventListener("click", changeBgColor);