// global-variable
var timer = 60;
var hitrn=0;
var score =0;


function scoreIncrease(){
    score += 10;
    document.querySelector("#score").textContent= score;
}

function randomBubble(){
    var clutter="";
    for(var i=1;i<177;i++){
        var rn = Math.floor(Math.random()*10)
    clutter += `<div class="b-box">${rn}</div>`;
    }
    document.querySelector(".btm").innerHTML = clutter;
}

function runTimer(){
    var timerint =  setInterval(() => {
        if(timer>0){
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector(".btm").innerHTML = `<h1>Game Over </h1>`
        }
    }, 1000);
}

function hit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitbox").textContent=hitrn;
}

document.querySelector(".btm")
.addEventListener('click', function(dets){
    var number = (Number(dets.target.textContent));
    if(number === hitrn){
        scoreIncrease();
        randomBubble();
        hit();
    }
})

randomBubble();
runTimer();
hit();