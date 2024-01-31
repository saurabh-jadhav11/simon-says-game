let uerSqe = [];
let gameSqe = [];
let box = ["red","green","yellow","purple"];

let start = false;
let level = 0;

document.addEventListener("keypress",function() {
    if(start==false){
    console.log("Game is started");
    start=true;

    levelUp();
    }
})

function btnFlash(box){
      box.classList.add("flash");
      setTimeout(function(){
        box.classList.remove("flash");
      },250)
}

let h4 = document.querySelector("h4");

function levelUp(){
    level++;
    h4.innerText = `Level ${level}`;
    uerSqe = [];

    let randInd = Math.floor(Math.random()*3);
    let randColor =  box[randInd];
    let randBox = document.querySelector(`.${randColor}`);
    btnFlash(randBox);

    gameSqe.push(randColor);
    console.log(gameSqe);
}

function checkAns(idx){
    
      

       if (uerSqe[idx] === gameSqe[idx]){
        if(uerSqe.length == gameSqe.length){
            setTimeout(levelUp,1000);
        }
       }else{
        h4.innerHTML = `GAme over Your score is <b>${level}<b> <br>press any key to restrat`;
        reset();
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor="white"
        },1000)
       }
}

function btnPress(){
     let btn = this;
     btnFlash(btn);
     
     userColor = btn.getAttribute("id");
     uerSqe.push(userColor);
     checkAns(uerSqe.length-1);
}

let allBtns = document.querySelectorAll(".box");

for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    gameSqe=[];
    uerSqe=[];
    start=false;
    level=0;
}