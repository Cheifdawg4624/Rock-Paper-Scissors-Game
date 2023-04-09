function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    results.textContent = "You lose! Paper covers rock!";
    console.log("You lose! Paper covers rock!");

    return ++computerCount;
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    results.textContent = "You win! Rock breaks scissors!";
    console.log("You win! Rock breaks scissors!");
    return ++playerCount;
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    results.textContent = "You lose! Scissors cuts paper!";
    console.log("You lose! Scissors cuts paper!");
    return ++computerCount;
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    results.textContent = "You win! Paper covers rock!";
    console.log("You win! Paper covers rock!");
    return ++playerCount;
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    results.textContent = "You lose! Rock smashes scissors!";
    console.log("You lose! Rock smashes scissors!");
    return ++computerCount;
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    results.textContent = "You win! Scissors cuts paper!";
    console.log("You win! Scissors cuts paper!");
    return ++playerCount;
  } else if (playerSelection === computerSelection) {
    results.textContent = "Its a draw try again!";
    console.log("Its a draw try again!");
  } else {
    console.log("Please choose either rock paper or scissors");
  }
}
let playerCount = 0;
let computerCount = 0;

console.log(playerCount);
console.log(computerCount);
// Gets Computers choice
function getComputerChoice() {
  const rps = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * rps.length);
  let computerChoice = rps[randomNumber];
  return computerChoice;
}
// Selected Elements
const buttons = document.querySelectorAll(".btn");

const results = document.querySelector(".results");

const score = document.querySelector(".score");

// Creating Elements
// Adds event listener for each button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.textContent, getComputerChoice());
    console.log(playerCount);
    console.log(computerCount);
    score.textContent = `Your score: ${playerCount} Computer score: ${computerCount}`;
    if (playerCount === 5) {
      score.textContent = `YOU WIN!`;
      computerCount = 0;
      playerCount = 0;
    }
    if (computerCount === 5) {
      score.textContent = `COMPUTER WINS!`;
      computerCount = 0;
      playerCount = 0;
    }
  });
});

// Adding score to DOM
// game();
