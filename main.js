let computerScore = document.querySelector(".computerNumber");
let gamesPlayed = document.querySelector(".gamesNumber");
let playerScore = document.querySelector(".playerNumber");
const rockButton = document.getElementById("rockButton");
const paperButton = document.getElementById("paperButton");
const scissorsButton = document.getElementById("scissorsButton");
let buttons = document.querySelector(".buttons");
let leftHand = document.getElementById("leftHand");
let rightHand = document.getElementById("rightHand");
let stillPlaying = true;
// let playerMove = "Rock";
// let computerMove = "Rock";

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

// function changeHand() {}

// function playeMove() {
//   let image = document.getElementById("rightHand");
//   if (document.getElementById("rockButton")) {
//     image.src = "./img/Right-Rock.png";
//     return "rock";
//   } else if (document.getElementById("paperButton")) {
//     image.src = "./img/Right-Paper.png";
//     return "paper";
//   } else if (document.getElementById("scissorsButton")) {
//     image.src = "./img/Right-Scissors.png";
//     return "scissors";
//   }
// }

rockButton.addEventListener("click", function () {
  rightRock();
  computerChoice();
  return "rock";
});

paperButton.addEventListener("click", function () {
  rightPaper();
  computerChoice();
  playeMove = "paper";
});

scissorsButton.addEventListener("click", function () {
  rightScissors();
  computerChoice();
  playeMove = "scissors";
});

// console.log(rightRock);

function rightRock() {
  rightHand.src = "./img/Right-Rock.png";
  // playerMove = "rock";
}
function rightPaper() {
  rightHand.src = "./img/Right-Paper.png";
}
function rightScissors() {
  rightHand.src = "./img/Right-Scissors.png";
}

function playeMove() {
  if (rockButton) {
    return "rock";
  } else if (paperButton) {
    return "paper";
  } else {
    return "scissors";
  }
}

let playerMove = "rock";
let computerMove = "paper";

function getWinner(playerMove, computerMove) {
  if (playerMove == "rock" && computerMove == "paper") {
    console.log("You LOSE!");
  } else if (playerMove === "rock" && computerChoice == "scissors") {
    return 1;
  } else if (playeMove == "rock" && computerChoice == "rock") {
    return 0;
  } else if (paperButton && computerChoice == "rock") {
    return 1;
  } else if (playeMove == "paper" && computerChoice == "scissors") {
    return -1;
  } else if (playeMove == "paper" && computerChoice == "paper") {
    return 0;
  } else if (playeMove == "scissors" && computerChoice == "paper") {
    return 1;
  } else if (playeMove == "scissors" && computerChoice == "rock") {
    return -1;
  } else if (playeMove == "scissors" && computerChoice == "scissors") {
    return 0;
  } else {
    console.log("ERROR!");
  }
}

// let result = getWinner(playeMove(), computerChoice());

// if (result == -1) {
//   document.getElementById("gameResult").innerHTML = "You LOSE!";
//   computerScore += 1;
// } else if (result == 0) {
//   document.getElementById("gameResult").innerHTML = "DRAW!";
// } else {
//   document.getElementById("gameResult").innerHTML = "You WIN!";
//   playerScore++;
// }

// function continuePlay() {
//   let r = confirm("Continue Playing?");
//   if (r == true) {
//   } else {
//     alert("Thank you for playing! Bye!");
//     stillPlaying = false;
//   }
// }

// continuePlay();
