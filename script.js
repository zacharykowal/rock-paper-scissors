function getComputerChoice() {
    let randomNumber = Math.random();
    console.log(randomNumber);
    if ((randomNumber >= 0) && (randomNumber < 0.33)) {
        return "rock";
    } else if ((randomNumber >= 0.33) && (randomNumber < 0.66)) {
        return "paper";
    }
    return "scissors";
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors:");
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceLower = humanChoice.toLowerCase();
    if (humanChoiceLower === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoiceLower}.`);
    } else if (computerChoice === "rock") {
        if (humanChoiceLower === "paper") {
            console.log("You win! Paper beats rock.");
            humanScore += 1;
        } else {
            console.log("You lose. Rock beats scissors.");
            computerScore += 1;
        }
    } else if (computerChoice === "paper") {
        if (humanChoiceLower === "scissors") {
            console.log("You win! Scissors beats paper.");
            humanScore += 1;
        } else {
            console.log("You lose. Paper beats rock.");
            computerScore += 1;
        }
    } else {
        if (humanChoiceLower === "rock") {
            console.log("You win! Rock beats scissors.");
            humanScore += 1;
        } else {
            console.log("You lose. Scissors beats paper.");
            computerScore += 1;
        }
    }
}

let humanScore = 0;
let computerScore = 0;