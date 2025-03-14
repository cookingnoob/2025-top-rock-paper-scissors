const choices = ["paper", "rock", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomNumer = Math.floor(Math.random() * 3);
  return choices[randomNumer];
}

function getHumanChoice() {
  let userValue = prompt("Escoge un valor!");
  return userValue.toLocaleLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "rock" && computerChoice == "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    console.log(`You won! ${humanChoice} beats ${computerChoice}`);
    ++humanScore;
  } else if (
    (computerChoice === "paper" && humanChoice === "rock") ||
    (computerChoice === "rock" && humanChoice == "scissors") ||
    (computerChoice === "scissors" && humanChoice === "rock")
  ) {
    console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
    ++computerScore;
  } else {
    console.log(`It's a tie ${computerChoice} ${humanChoice}`);
  }
}

function playGame() {
  for (let i = 0; i <= 4; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }
  if (humanScore > computerScore) {
    console.log(
      `You won the match. Your score ${humanScore} computer score ${computerScore}`
    );
  } else if (humanScore < computerScore) {
    console.log(
      `You lost, computer score ${computerScore}, your score ${humanScore}`
    );
  } else {
    console.log(
      `It's a tie human score ${humanScore} computer score ${computerScore}`
    );
  }
}

playGame();
