
var timer=60;
var score=0;
var hitrn=0
function increasescore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
}
function getNewHit(){
     hitrn=Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent=hitrn;
}


function makeBubble(){
var clutter="";

for(var i=1;i<=102;i++){
    var rn=Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
 
}
document.querySelector("#pbtm").innerHTML=clutter;
}

function runTimmer(){
    var timerinterval=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerinterval);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000);
}
document.querySelector("#pbtm").addEventListener("click",function(details){
 var clickednum=Number(details.target.textContent);
 if(clickednum===hitrn){
    increasescore();
    makeBubble();
    getNewHit();
 }
});

runTimmer();
makeBubble();
getNewHit();
increasescore();