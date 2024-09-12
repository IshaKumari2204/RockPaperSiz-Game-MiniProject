let userPick = document.querySelectorAll(".choice");
let msgArea = document.querySelector(".play-btn");
let myScore = document.querySelector("#my-score");
let compScore = document.querySelector("#comp-score");
let resetBtn = document.querySelector(".reset");
let compPoint = 0;
let myPoint = 0;
const compChoice=()=>{
    avlChoices = ["rock","paper","scissor"];
    return avlChoices[Math.floor(Math.random()*3)];
}
const checkWinner = (player,computer)=>{
    if(player===computer){
        return "ohh it's a draw";
    } else if(player==="rock"&&computer==="paper" ||
      player==="paper"&&computer==="scissor" ||
      player==="scissor" && computer==="rock"){
        return "computer won";
    }else{
         return "Congo!! you won";
      }
}
const updateScore = (winner)=>{
    if(winner==="ohh it's a draw"){
        return;
    } if(winner==="computer won"){
        compPoint=compPoint+1;
        compScore.innerText=compPoint;
    }if(winner==="Congo!! you won"){
        myPoint=myPoint+1;
        myScore.innerText=myPoint;
    }
}
userPick.forEach(userChoice=>{ //dont use loop here,, one loop is completed it will retain the last value scissor and not change after that
    userChoice.addEventListener("click",()=>{
       user = userChoice.getAttribute("id");
       winner=checkWinner(user,compChoice());
       msgArea.innerText = winner;
       msgArea.classList.remove("hide");
       updateScore(winner);
})
})
resetBtn.addEventListener("click",()=>{
    compPoint = 0;
    myPoint = 0;
    myScore.innerText=0;
    compScore.innerText=0;
    msgArea.classList.add("hide");
})