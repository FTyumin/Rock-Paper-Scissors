// Global variables to track score across multiple rounds
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let x = Math.floor(Math.random() * 3);
    switch (x) {
        case 0: return "Rock";
        case 1: return "Paper";
        case 2: return "Scissors";
    }
}

function getHumanChoice(input) {
    if (input.toLowerCase() === "rock") return "Rock";
    if (input.toLowerCase() === "paper") return "Paper";
    if (input.toLowerCase() === "scissors") return "Scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw! Next round!");
        return "draw";
    }
    if (humanChoice === "Rock") {
        if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock!");
            return "computer";
        } else {
            console.log("You win! Rock beats Scissors!");
            return "human";
        }
    }
    if (humanChoice === "Paper") {
        if (computerChoice === "Scissors") {
            console.log("You lose! Scissors beat Paper!");
            return "computer";
        } else {
            console.log("You win! Paper beats Rock!");
            return "human";
        }
    }
    if (humanChoice === "Scissors") {
        if (computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors!");
            return "computer";
        } else {
            console.log("You win! Scissors beat Paper!");
            return "human";
        }
    }
}

function playGame(button_id) {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice(button_id);
    let result = document.getElementById("result");

    // Reset the border color each round
    result.style.border = "none";

    let roundResult = playRound(humanChoice, computerChoice);

    if (roundResult === "human") {
        humanScore++;
    } else if (roundResult === "computer") {
        computerScore++;
        result.style.border = "3px solid red"; // To show the player he lost a round
    }

    // Update the result message
    result.textContent = `Score - You: ${humanScore} | Computer: ${computerScore}`;

    // Check if either player has won 5 rounds
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            result.textContent = "You won! Computer lost!";
        } else {
            result.textContent = "You lost! Computer won!";
        }
        // Reset the scores for a new game
        humanScore = 0;
        computerScore = 0;
    }
}

// Set up button event listeners
let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playGame(button.id);
    });
});
