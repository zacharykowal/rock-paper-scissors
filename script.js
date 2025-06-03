let humanScore = 0;
let computerScore = 0;

const roundResult = document.querySelector("#round-result");
const gameResult = document.querySelector("#game-result");
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.textContent.toLowerCase(), getComputerChoice());
    });
});

function getComputerChoice() {
    const randomNumber = Math.random();
    if ((randomNumber >= 0) && (randomNumber < 0.33)) {
        return "rock";
    } else if ((randomNumber >= 0.33) && (randomNumber < 0.66)) {
        return "paper";
    }
    return "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        roundResult.textContent = `This round is a tie. You both chose ${humanChoice}.`;
    } else if (computerChoice === "rock") {
        if (humanChoice === "paper") {
            roundResult.textContent = "You win this round! Paper beats rock.";
            humanScore += 1;
        } else {
            roundResult.textContent = "You lose this round. Rock beats scissors.";
            computerScore +=1;
        }
    } else if (computerChoice === "paper") {
        if (humanChoice === "scissors") {
            roundResult.textContent = "You win this round! Scissors beats paper.";
            humanScore += 1;
        } else {
            roundResult.textContent = "You lose this round. Paper beats rock.";
            computerScore += 1;
        }
    } else {
        if (humanChoice === "rock") {
            roundResult.textContent = "You win this round! Rock beats scissors.";
            humanScore += 1;
        } else {
            roundResult.textContent = "You lose this round. Scissors beats paper.";
            computerScore += 1;
        }
    }

    if (humanScore === 5) {
        gameResult.textContent = `You win the game! The score was ${humanScore} to ${computerScore}. Click a button to play again.`;
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        gameResult.textContent = `You lose the game. The score was ${computerScore} to ${humanScore}. Click a button to play again.`;
        humanScore = 0;
        computerScore = 0;
    } else {
        gameResult.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
    }
}