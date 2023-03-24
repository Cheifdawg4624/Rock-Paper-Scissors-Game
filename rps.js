function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper covers rock!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock breaks scissors!");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors cuts paper!");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper covers rock!");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock smashes scissors!");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors cuts paper!");
  } else if (playerSelection === computerSelection) {
    console.log("Its a draw try again!");
  } else {
    console.log("Please choose either rock paper or scissors");
  }
}

function game() {}

function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * rps.length);
  let computerChoice = rps[randomNumber];
  return computerChoice;
}

let playerChoice = prompt("Choose Rock Paper Scissor").toLowerCase();

let computerSelection = getComputerChoice();

console.log(playRound(playerChoice, computerSelection));

console.log(game());
