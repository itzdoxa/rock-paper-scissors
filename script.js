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

function playGame(){
   let round = 0;

   for(let i = 1; i <= 5; i++) {
         round++;
         let playerSelection = prompt().toLowerCase();
         let computerSelection = getComputerChoice();
         console.log( "player chose " + playerSelection + ", " + "computer chose " + computerSelection );

         playRound( playerSelection, computerSelection);

         console.log( "round: " + round + "; computer score = " + computerScore + " , " + "player score = " + playerScore);

   }
 
  if(playerScore > computerScore && round == 5) {
    alert("player wins the game");
  }
  else if(computerScore > playerScore && round == 5){
    alert("computer wins the game");
  }
 else if (playerScore == computerScore && round == 5) {
    alert("the game is a tie") 
 };
}

playGame();


