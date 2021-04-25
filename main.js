let computerScore = document.querySelector(".computerNumber");
let gamesPlayed = document.querySelector(".gamesNumber");
let playerScore = document.querySelector(".playerNumber");
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
let buttons = document.querySelector(".buttons");
let leftHand = document.querySelector(".leftHand");
let rightHand = document.querySelector(".rightHand");
let stillPlaying = true;

function computerChoice() {
  let randNum = Math.floor(Math.random() * 3 + 1);

  if (randNum == 1) {
    document.getElementById("leftHand").src = "./img/Left-Rock.png";
    return "rock";
  } else if (randNum == 2) {
    document.getElementById("leftHand").src = "./img/Left-Paper.png";
    return "paper";
  } else {
    document.getElementById("leftHand").src = "./img/Left-Scissors.png";
    return "scissors";
  }
}

function changeHand() {}

function playerChoice() {
  if (rockButton) {
    return "rock";
  } else if (paperButton) {
    document.getElementById("rightHand").src = "./img/Right-Paper.png";
    return "paper";
  } else if (scissorsButton) {
    return "scissors";
  }
}

paperButton.addEventListener("click", computerChoice);
rockButton.addEventListener("click", computerChoice);
scissorsButton.addEventListener("click", computerChoice);

function getWinner(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "paper") {
    return -1;
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    return 1;
  } else if (playerChoice == "rock" && computerChoice == "rock") {
    return 0;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return 1;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return -1;
  } else if (playerChoice == "paper" && computerChoice == "paper") {
    return 0;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return 1;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return -1;
  } else if (playerChoice == "scissors" && computerChoice == "scissors") {
    return 0;
  } else {
    console.log("ERROR!");
  }
}

let result = getWinner(playerChoice(), computerChoice());

if (result == -1) {
  document.getElementById("gameResult").textContent = "You LOSE!";
  computerScore += 1;
} else if (result == 0) {
  document.getElementById("gameResult").textContent = "DRAW!";
} else {
  document.getElementById("gameResult").textContent = "You WIN!";
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
