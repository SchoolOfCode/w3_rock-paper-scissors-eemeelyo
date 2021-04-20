// let playerMove = "scissors";
// let computerMove = "rock";

function getWinner(playerMove, computerMove) {
  if (playerMove == "rock" && computerMove == "paper") {
    return -1;
  } else if (playerMove == "rock" && computerMove == "scissors") {
    return 1;
  } else if (playerMove == "rock" && computerMove == "rock") {
    return 0;
  } else if (playerMove == "paper" && computerMove == "rock") {
    return 1;
  } else if (playerMove == "paper" && computerMove == "scissors") {
    return -1;
  } else if (playerMove == "paper" && computerMove == "paper") {
    return 0;
  } else if (playerMove == "scissors" && computerMove == "paper") {
    return 1;
  } else if (playerMove == "scissors" && computerMove == "rock") {
    return -1;
  } else if (playerMove == "scissors" && computerMove == "scissors") {
    return 0;
  }
}

let playerChoice = prompt("What is your move?");
let result = getWinner(playerChoice, "paper");
alert(result);
