function getComputerChoice() {

    // random value: 0,1 or 2
    let x = Math.floor(Math.random() * 3);

    switch(x) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
    }
}

function getHumanChoice () {
    let input = prompt("Enter your choice! Rock,Paper or Scissors");
    if(input.toLowerCase()==="rock") {
        return "Rock";
    }

    if(input.toLowerCase()==="paper") {
        return "Paper";
    }

    if(input.toLowerCase()==="scissors") {
        return "Scissors";
    }
}

function playGame() {

    let computerChoice = getComputerChoice();
    // console.log(computerChoice);

    let humanChoice = getHumanChoice();
    // console.log(humanChoice);

    function playRound(humanChoice,computerChoice) {

        if(humanChoice===computerChoice) {
            console.log("It's a draw! Next round!")
        }
        else if(humanChoice==="Rock") {
            if(computerChoice==="Paper") {console.log("You lose! Paper beats Rock!"); computerScore++;}
            if(computerChoice==="Scissors") {console.log("You win! Rock beats Scissors!"); humanScore++;}
        }
    
        else if(humanChoice==="Paper") {
            if(computerChoice==="Rock") {console.log("You lose! Rock beats Paper!"); computerScore++;}
            if(computerChoice==="Scissors") {console.log("You win! Paper beats Scissors!"); humanScore++;}
        }
    
        else if(humanChoice==="Scissors") {
            if(computerChoice==="Paper") {console.log("You win! Scissors beat Paper!"); humanScore++;}
            if(computerChoice==="Rock") {console.log("You lose! Rock beats Scissors!"); computerScore++;}
        }

    }

    // variables to hold the score
    let humanScore = 0;
    let computerScore = 0;

    if(humanChoice===computerChoice) {
        console.log("It's a draw! Next round!")
    }
    else if(humanChoice==="Rock") {
        if(computerChoice==="Paper") {console.log("You lose! Paper beats Rock!"); computerScore++;}
        if(computerChoice==="Scissors") {console.log("You win! Rock beats Scissors!"); humanScore++;}
    }

    else if(humanChoice==="Paper") {
        if(computerChoice==="Rock") {console.log("You lose! Rock beats Paper!"); computerScore++;}
        if(computerChoice==="Scissors") {console.log("You win! Paper beats Scissors!"); humanScore++;}
    }

    else if(humanChoice==="Scissors") {
        if(computerChoice==="Paper") {console.log("You win! Scissors beat Paper!"); humanScore++;}
        if(computerChoice==="Rock") {console.log("You lose! Rock beats Scissors!"); computerScore++;}
    }

    // game lasts for 5 rounds
    while(computerScore+humanScore<=4) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // after 5 rounds the winner is announced
    if(computerScore+humanScore==5) {
        if(computerScore>humanScore) {console.log("You lost! Computer won!")}
        else {console.log("You won! Computer lost!")}
    }
}

playGame();
