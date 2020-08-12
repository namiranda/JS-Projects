const buttonP1 = document.querySelector("#p1");
const buttonP2 = document.querySelector("#p2");
const displayP1 = document.querySelector("#displayP1");
const displayP2 = document.querySelector("#displayP2");
const btnReset = document.querySelector("#reset");
const numInput = document.querySelector("input");
const displayMaxScore = document.querySelector("h2 span");

let maxScore = 5;
let gameOver = false;

let scoreP1 = 0;
let scoreP2 = 0;

function addScoreP1() {
    if (!gameOver) {
        scoreP1++;
    }
    if (scoreP1 === maxScore) {
        gameOver = true;
        displayP1.classList.add("winner");
    }
    console.log(gameOver);
    displayP1.textContent = scoreP1;
}

function addScoreP2() {
    if (!gameOver) {
        scoreP2++;
    }
    if (scoreP2 === maxScore) {
        gameOver = true;
        displayP2.classList.add("winner");
    }

    console.log(gameOver);
    displayP2.textContent = scoreP2;
}

function reset(){
    scoreP1 = 0;
    scoreP2 = 0;
    displayP1.textContent = scoreP1;
    displayP1.classList.remove("winner");
    displayP2.textContent = scoreP2;
    displayP2.classList.remove("winner");
    gameOver = false;
}

buttonP1.addEventListener("click", addScoreP1);
buttonP2.addEventListener("click", addScoreP2);
btnReset.addEventListener("click", reset);
numInput.addEventListener("change", function() {
    maxScore = parseInt(this.value);
    displayMaxScore.textContent = this.value;
    reset();
})
