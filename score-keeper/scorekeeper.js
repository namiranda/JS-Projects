const buttonP1 = document.querySelector("#p1");
const buttonP2 = document.querySelector("#p2");
const displayP1 = document.querySelector("#displayP1");
const displayP2 = document.querySelector("#displayP2");

const maxScore = 5;

let scoreP1 = 0;
let scoreP2 = 0;

function addScoreP1(){
    if(scoreP1 < maxScore){
        scoreP1++;
    }
    displayP1.textContent = scoreP1;
}
function addScoreP2(){
    if(scoreP2 < maxScore){
        scoreP2++;
    }
    displayP2.textContent = scoreP2;
}

buttonP1.addEventListener("click", addScoreP1);
buttonP2.addEventListener("click", addScoreP2);