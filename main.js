let computerScore = document.querySelector(".computerNumber");
let gamesPlayed = document.querySelector(".gamesNumber");
let playerScore = document.querySelector(".playerNumber");
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const buttons = document.querySelector(".buttons");
let stillPlaying = true;

function computerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);

  if (randNum == 1) {
    return "rock";
  } else if (randNum == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerChoice() {
  if (rockButton) {
    return "rock";
  } else if (paperButton) {
    return "paper";
  } else if (scissorsButton) {
    return "scissors";
  }
}

buttons.addEventListener("click", computerChoice);

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

let result = getWinner(playerChoice(), computerChoice());

if (result == -1) {
  computerScore++;
} else if (result == 0) {
} else {
  playerScore++;
}

// function continuePlay() {
//   let r = confirm("Continue Playing?");
//   if (r == true) {
//   } else {
//     alert("Thank you for playing! Bye!");
//     stillPlaying = false;
//   }
// }

continuePlay();
