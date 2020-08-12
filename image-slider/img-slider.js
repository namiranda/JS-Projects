const images = ["https://images.unsplash.com/photo-1503431128871-cd250803fa41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" , 
"https://images.unsplash.com/photo-1501820488136-72669149e0d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
"https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=683&q=80",];

const btnLeft = document.querySelector("#left");
const btnRight = document.querySelector("#right");
const body = document.querySelector("body");

let imgIndex = -1;

btnLeft.addEventListener("click", moveLeft);
btnRight.addEventListener("click", moveRight);

function moveLeft(){
    imgIndex--;
    if(imgIndex < 0){
        imgIndex = images.length-1;
    }
    body.style.backgroundImage = "url(" + images[imgIndex] + ")"; 
}

function moveRight(){
    imgIndex++;
    if(imgIndex > images.length-1){
        imgIndex = 0;
    }
    body.style.backgroundImage = "url(" + images[imgIndex] + ")"; 
}