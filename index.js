console.log("test")

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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
   

    
    if(humanChoice===computerChoice) {
        console.log("It's a draw! Next round!")
    }
    else if(humanChoice==="Rock") {
        if(computerChoice==="Paper") {console.log("You lose! Paper beats Rock!");}
        if(computerChoice==="Scissors") {console.log("You win! Rock beats Scissors!");}
    }

    else if(humanChoice==="Paper") {
        if(computerChoice==="Rock") {console.log("You lose! Rock beats Paper!");}
        if(computerChoice==="Scissors") {console.log("You win! Paper beats Scissors!");}
    }

    else if(humanChoice==="Scissors") {
        if(computerChoice==="Paper") {console.log("You win! Scissors beat Paper!");}
        if(computerChoice==="Rock") {console.log("You lose! Rock beats Scissors!");}
    }

}

console.log(getComputerChoice());

console.log(getHumanChoice());