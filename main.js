// let playerMove = "scissors";
// let computerMove = "rock";

function getWinner(playerMove, computerMove) {
  if (playerMove == "rock" && computerMove == "paper") {
    console.log("Computer Wins!");
  } else if (playerMove == "rock" && computerMove == "scissors") {
    console.log("Player Wins!");
  } else if (playerMove == "rock" && computerMove == "rock") {
    console.log("Even -- Again!");
  } else if (playerMove == "paper" && computerMove == "rock") {
    console.log("Player Wins!");
  } else if (playerMove == "paper" && computerMove == "scissors") {
    console.log("Computer Wins!");
  } else if (playerMove == "paper" && computerMove == "paper") {
    console.log("Even -- Again!");
  } else if (playerMove == "scissors" && computerMove == "paper") {
    console.log("Player Wins!");
  } else if (playerMove == "scissors" && computerMove == "rock") {
    console.log("Computer Wins!");
  } else if (playerMove == "scissors" && computerMove == "scissors") {
    console.log("Even -- Again!");
  }
}

let result = getWinner("rock", "paper");
