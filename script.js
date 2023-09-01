var timer = 60;
var score = 0;
var hitrn = 0;

function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit() {
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble() {
    var clutter ="";

    for(var i =1; i<76; i++){
        var rand = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rand}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML=`<h1>Game Over, Your score is ${score}</h1>`;
        }
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

runTimer();
makeBubble();
getNewHit();

