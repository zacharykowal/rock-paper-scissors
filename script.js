const NUMBER_OF_ROUNDS = 5;
const HUMAN_WIN = 1;
const COMPUTER_WIN = 2;
const TIE = 3;

function getComputerChoice() {
    const randomNumber = Math.random();
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
        console.log(`This round is a tie. You both chose ${humanChoiceLower}.`);
        return TIE;
    } else if (computerChoice === "rock") {
        if (humanChoiceLower === "paper") {
            console.log("You win this round! Paper beats rock.");
            return HUMAN_WIN;
        } else {
            console.log("You lose this round. Rock beats scissors.");
            return COMPUTER_WIN;
        }
    } else if (computerChoice === "paper") {
        if (humanChoiceLower === "scissors") {
            console.log("You win this round! Scissors beats paper.");
            return HUMAN_WIN;
        } else {
            console.log("You lose this round. Paper beats rock.");
            return COMPUTER_WIN;
        }
    } else {
        if (humanChoiceLower === "rock") {
            console.log("You win this round! Rock beats scissors.");
            return HUMAN_WIN;
        } else {
            console.log("You lose this round. Scissors beats paper.");
            return COMPUTER_WIN;
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < NUMBER_OF_ROUNDS; i++) {
        let currentRoundResult = playRound(getHumanChoice(), getComputerChoice());
        if (currentRoundResult === HUMAN_WIN) {
            humanScore += 1;
        } else if (currentRoundResult === COMPUTER_WIN) {
            computerScore += 1;
        }
    }

    if (humanScore > computerScore) {
        console.log(`You win the game! The score was ${humanScore} to ${computerScore}.`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game. The score was ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`The game was a tie. The score was ${humanScore} to ${computerScore}.`);
    }
}

playGame();