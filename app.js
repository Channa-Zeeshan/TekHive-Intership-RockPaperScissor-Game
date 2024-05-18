let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice")
const msg=document.querySelector("#msg")
const myScore=document.querySelector("#user-score")
const compScore=document.querySelector("#computer-score")

const drawGame=()=>{
    console.log("Draw Game");
    msg.innerText="Draw Game"
    msg.style.backgroundColor="blue"
}
const showWinner=(userWin,userChoice,compChoice)=>{
 if(userWin){
    console.log("you Win");
    userScore++;
    myScore.innerText=userScore;
    msg.innerText=` Congrats ! You Win | ${userChoice} beats ${compChoice} `
    msg.style.backgroundColor="green"
    
 }else{
    console.log("you Loose");
    computerScore++;
    compScore.innerText=computerScore;
    msg.innerText=` Sorry You Loose | ${compChoice} beats ${userChoice} `
    msg.style.backgroundColor="red"
 }
}


const genCompChoice=()=>{
    const options=[ 'rock', 'paper', 'scissor'];
    let num=Math.floor(Math.random()*3);
    
    return options[num];

}

const playGame=(userChoice)=>{
    console.log("User Choice is ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice is ",compChoice);
    if(userChoice===compChoice){
        drawGame();
        //Draw Game
    }
    else {
        let userWin=true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'?false : true;
            
        } else if(userChoice==='paper'){
            userWin=compChoice==='scissor'?false: true;
        }else{
            userWin=compChoice==='rock'?false: true;
        }
        showWinner(userWin,userChoice,compChoice);

    }


}



choices.forEach((choice)=>{
    
choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    
    playGame(userChoice);
    

});

});