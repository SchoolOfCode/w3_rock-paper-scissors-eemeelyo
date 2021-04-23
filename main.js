// let playerMove = "scissors";
// let computerMove = "rock";

let playerScore = 0;
let computerScore = 0;
let stillPlaying = true;

while (stillPlaying === true) {
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

  function playerChoice() {
    let player = prompt(
      "Pick a number. (1)-rock, (2)-paper or (3)-scissors of your choice."
    );

    if (player == 1) {
      return "rock";
    } else if (player == 2) {
      return "paper";
    } else if (player == 3) {
      return "scissors";
    } else if (player == 0) {
      return false;
    } else {
      alert("Select only numbers 1, 2 or 3");
      stillPlaying == false;
      // return player;
    }
  }

  let result = getWinner(playerChoice(), computerChoice());

  if (result == -1) {
    computerScore++;
    alert(result + " -You LOSE!");
    alert(
      "Player Score = " + playerScore + "\nComputer Score = " + computerScore
    );
  } else if (result == 0) {
    alert(result + " -Draw");
  } else {
    playerScore++;
    alert(result + " -You WIN!");
    alert(
      "PLayer Score = " + playerScore + "\nComputer Score = " + computerScore
    );
  }

  function continuePlay() {
    let r = confirm("Continue Playing?");
    if (r == true) {
    } else {
      alert("Thank you for playing! Bye!");
      stillPlaying = false;
    }
  }

  continuePlay();
}
