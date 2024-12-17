let gameSeq = [];
let userSeq = [];

var btns = ['color-1', 'color-2', 'color-3', 'color-4'];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener('keypress', function(){
    if(started == false){
        console.log("game start");
        started = true;

        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("Flash");
    setTimeout(function(){
        btn.classList.remove("Flash");
    }, 250)
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`)
    gameSeq.push(randColor);
    console.log(btns, randColor,randIdx,gameSeq)
    gameFlash(randBtn);
}

function checkAns(idx) {

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
     
       h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start the Game.`;
       document.querySelector('body').style.backgroundColor = 'red';
       setTimeout(function () {
        document.querySelector('body').style.backgroundColor = 'white';
       }, 150);

       reset();
    }
}

function btnPress() {

    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn")
for(i of allBtns){
    i.addEventListener('click', btnPress);
}


function reset(){

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}