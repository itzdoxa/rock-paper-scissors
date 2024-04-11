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

function playRound (playerSelection, computerSelection) {
         
      if (playerSelection === computerSelection) {
                 console.log( "it's a tie");
                 return "it's a tie";
         }
      else if (playerSelection == "rock" && computerSelection == "paper") {
                 computerScore += 1;
                 console.log( "you lose, paper defeats rock");
                 return "you lose, paper defeats rock";
         }
      else if (playerSelection == "rock" && computerSelection == "scissors") {
                 playerScore += 1;
                 console.log( "you win, rock defeats scissors");
                 return "you win, rock defeats scissors";
         }
      else if (playerSelection == "paper" && computerSelection == "rock") {
                 playerScore += 1;
                 console.log( "you win, paper defeats rock");
                 return "you win, paper defeats rock";
         }
      else if (playerSelection == "paper" && computerSelection == "scissors") {
                 computerScore += 1;
                 console.log( "you lose, scissors defeats paper");
                 return "you lose, scissors defeats paper";
         }
      else if (playerSelection == "scissors" && computerSelection == "paper") {
                 playerScore += 1;
                 console.log( "you win, scissors defeats paper");
                 return "you win, scissors defeats paper";
         }
      else if (playerSelection == "scissors" && computerSelection == "rock") {
                 computerScore += 1;
                 console.log( "you lose, rock defeats scissors");
                 return "you lose, rock defeats scissors";
         }

   }

const button = document.querySelector("#container");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");

rock.textContent = "rock";
button.appendChild(rock);
paper.textContent = "paper";
button.appendChild(paper);
scissors.textContent = "scissors";
button.appendChild(scissors);

let round = 0;
let computerScore = 0;
let playerScore = 0;

rock.addEventListener('click', function() {
   playRound("rock", getComputerChoice());
   round++;
   div.textContent = liveScore();

   if (round == 5) {
      div.textContent += declareWinner();
    }
});

paper.addEventListener('click', function() {
   playRound("paper", getComputerChoice());
   round++;
   div.textContent = liveScore();

   if (round == 5) {
      div.textContent += declareWinner();
    }
});

scissors.addEventListener('click',function() {
  playRound("scissors", getComputerChoice());
  round++;
  div.textContent = liveScore();

  if (round == 5) {
   div.textContent += declareWinner();
 }
});

const div = document.createElement("div");
button.appendChild(div);

function liveScore(){
         return "round: " + round +"; computer score = " + computerScore + " , " + "player score = " + playerScore;
}

function declareWinner(){
      if(playerScore > computerScore && round == 5) {
            round = 0;
            computerScore = 0;
            playerScore = 0;
         return "player wins the game!";
       }
       else if(computerScore > playerScore && round == 5){
            round = 0;
            computerScore = 0;
            playerScore = 0;
         return "computer wins the game!";
       }
      else if (playerScore == computerScore && round == 5) {
            round = 0;
            computerScore = 0;
            playerScore = 0;
         return "the game is a tie!"; 
      }
 };

 

 
 
   


