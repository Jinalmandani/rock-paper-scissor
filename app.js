let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")
const userScorepara = document.querySelector("#user_score")
const compScorepara = document.querySelector("#computer_score")

const genComChoice = ()=>{
    //rock,paper,scissor
    const option = ["rock","paper","scissor"]
    const ranIdx =Math.floor(Math.random()*3)
    return option[ranIdx]
}

const showWin = (userWin,userChoice,compChoice)=>{
    if (userWin) {
        userScore++;
        userScorepara.innerText=userScore;
        msg.innerText =`You win! your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        msg.innerText =`You lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
    }
}

const grawGame = ()=>{
    msg.innerText ="Game was graw.play again!";
    msg.style.backgroundColor="#081b31";    
}

const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    // generate computer choice 
    const compChoice = genComChoice();
    console.log("computer choice",compChoice);

    if (userChoice===compChoice) {
        grawGame();
    }
    else{
        let userWin = true;
        if (userChoice==="rock") {
            //paper,scissor
            userWin= compChoice==="paper" ? false : true;
        }
        else if(userChoice==="paper"){
            //scissor,rock
            userWin = compChoice==="scissor" ? false:true;
        }
        else{
            //rock,paper
            userWin = compChoice==="rock" ?false:true;
        }
        showWin(userWin,userChoice,compChoice)
    }
}


choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id")
    
    playGame(userChoice)
  });
});
