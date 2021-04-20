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
  } else {
    console.log("ERROR!");
  }
}

function computerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);
  // return randNum;
  // console.log(rand);
  if (randNum == 1) {
    return "rock";
  } else if (randNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}
// console.log(computerChoice());

// console.log(computerChoice);
let playerChoice = prompt("Type rock, paper or scissors or you choice.");
let result = getWinner(playerChoice, computerChoice());
alert(result);
