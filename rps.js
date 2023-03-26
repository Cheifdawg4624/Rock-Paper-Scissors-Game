function playRound(playerSelection, computerSelection) {
  let playerWinner;
  if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper covers rock!");
    return computerCount++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock breaks scissors!");
    return playerCount++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors cuts paper!");
    return computerCount++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper covers rock!");
    return playerCount++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock smashes scissors!");
    return computerCount++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors cuts paper!");
    return playerCount++;
  } else if (playerSelection === computerSelection) {
    console.log("Its a draw try again!");
  } else {
    console.log("Please choose either rock paper or scissors");
  }
}
let playerCount = 0;
let computerCount = 0;

function game() {
  playRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `The score is player: ${playerCount} to computer: ${computerCount}`
  );
  playRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `The score is player: ${playerCount} to computer: ${computerCount}`
  );
  playRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `The score is player: ${playerCount} to computer: ${computerCount}`
  );
  playRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `The score is player: ${playerCount} to computer: ${computerCount}`
  );
  playRound(getPlayerChoice(), getComputerChoice());
  console.log(
    `The score is player: ${playerCount} to computer: ${computerCount}`
  );
}
// Gets Computers choice
function getComputerChoice() {
  const rps = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * rps.length);
  let computerChoice = rps[randomNumber];
  return computerChoice;
}
// Gets player's choice
function getPlayerChoice() {
  let playerChoice = prompt("Choose Rock Paper Scissor").toLowerCase();
  return playerChoice;
}

game();
