
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

function playRound (playerSelection, computerSelection) {
            if (playerSelection === computerSelection) {
               return "it's a tie";
            }
            else if (playerSelection == "rock" && computerSelection == "paper") {
              computerScore += 1;
              return "you lose, paper defeats rock";
            }
            else if (playerSelection == "rock" && computerSelection == "scissors") {
               playerScore += 1;
               return "you win, rock defeats scissors";
            }
            else if (playerSelection == "paper" && computerSelection == "rock") {
               playerScore += 1;
               return "you win, paper defeats rock";
            }
            else if (playerSelection == "paper" && computerSelection == "scissors") {
               computerScore += 1;
               return "you lose, scissors defeats paper";
            }
           else if (playerSelection == "scissors" && computerSelection == "paper") {
               playerScore += 1;
               return "you win, scissors defeats paper";
            }
            else if (playerSelection == "scissors" && computerSelection == "rock") {
               computerScore += 1;
               return "you lose, rock defeats scissors";
            }
        
}

const playerSelection = prompt().toLowerCase();
const computerSelection = getComputerChoice();


function playGame(){

   console.log( "player chose " + playerSelection + ".  " + playRound( playerSelection, computerSelection));
   console.log( "computer score = " + computerScore + ", player score = " + playerScore);
}

playGame();





