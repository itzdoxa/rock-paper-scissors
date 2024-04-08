function getComputerChoice () {
   let x = Math.floor(Math.random()*3);
 switch (x) {

    case 0:
       x = "rock";
    break;
   
    case 1:
        x = "paper";
    break;
   
    case 2:
       x  = "scissors";
    break;
     }
 console.log("computer chose " + x);
 return x;
}

let computerScore = 0;
let playerScore = 0;
let round = 1;

function playRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
               round += 1;
               return "it's a tie";
            }
            else if (playerSelection == "rock" && computerSelection == "paper") {
              computerScore += 1;
              round += 1;
              return "you lose, paper defeats rock";
            }
            else if (playerSelection == "rock" && computerSelection == "scissors") {
               playerScore += 1;
               round += 1;
               return "you win, rock defeats scissors";
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
               playerScore += 1;
               round += 1;
               return "you win, paper defeats rock";
            }
            else if (playerSelection == "paper" && computerSelection == "scissors") {
               computerScore += 1;
               round += 1;
               return "you lose, scissors defeats paper";
            }
           else if (playerSelection == "scissors" && computerSelection == "paper") {
               playerScore += 1;
               round += 1;
               return "you win, scissors defeats paper";
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
               computerScore += 1;
               round += 1;
               return "you lose, rock defeats scissors";
            }
        
}

function playGame(){

   let playerSelection = prompt().toLowerCase();
   let computerSelection = getComputerChoice();

   console.log( "round " + round + ": " + "player chose " + playerSelection + ", " + playRound( playerSelection, computerSelection));
   console.log( "computer score = " + computerScore + " , " + "player score = " + playerScore);
     
    if(playerScore >= 3 && round == 5) {
      alert("player wins the game");
    }
    else if(computerScore >= 3 && round == 5){
      alert("computer wins the game");
    }
   else if (playerScore < 3 && computerScore < 3 && round == 5) {
      if(playerScore > computerScore) alert("player wins the game")
      if(playerScore < computerScore) alert("computer wins the game")
      if(playerScore == computerScore) alert("the game is a tie") 
   };
}

playGame();
playGame();
playGame();
playGame();
playGame();



