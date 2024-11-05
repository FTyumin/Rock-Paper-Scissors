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

function getHumanChoice (input) {
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

function playGame(button_id) {
    

    

    let computerChoice = getComputerChoice();
    // console.log(computerChoice);

    let humanChoice = getHumanChoice(button_id);
    // console.log(humanChoice);

    // function playRound(humanChoice,computerChoice) {
    //     let result='';

    //     if(humanChoice===computerChoice) {
    //         result.textContent ="It's a draw! Next round!";
    //     }
    //     else if(humanChoice==="Rock") {
    //         if(computerChoice==="Paper") {result.textContent = "You lose! Paper beats Rock!"; computerScore++;}
    //         if(computerChoice==="Scissors") {result.textContent = "You win! Rock beats Scissors!"; humanScore++;}
    //     }
    
    //     else if(humanChoice==="Paper") {
    //         if(computerChoice==="Rock") {console.log("You lose! Rock beats Paper!"); computerScore++;}
    //         if(computerChoice==="Scissors") {console.log("You win! Paper beats Scissors!"); humanScore++;}
    //     }
    
    //     else if(humanChoice==="Scissors") {
    //         if(computerChoice==="Paper") {console.log("You win! Scissors beat Paper!"); humanScore++;}
    //         if(computerChoice==="Rock") {console.log("You lose! Rock beats Scissors!"); computerScore++;}
    //     }

    // }

    // variables to hold the score
    let humanScore = 0;
    let computerScore = 0;
    let result = document.getElementById("result");

    if(humanChoice===computerChoice) {
        result.textContent = "It's a draw! Next round!";
    }
    else if(humanChoice==="Rock") {
        if(computerChoice==="Paper") {result.textContent = "You lose! Paper beats Rock!"; computerScore++;}
        if(computerChoice==="Scissors") {result.textContent = "You win! Rock beats Scissors!"; humanScore++;}
    }

    else if(humanChoice==="Paper") {
        if(computerChoice==="Rock") {result.textContent = "You lose! Rock beats Paper!"; computerScore++;}
        if(computerChoice==="Scissors") {result.textContent = "You win! Paper beats Scissors!"; humanScore++;}
    }

    else if(humanChoice==="Scissors") {
        if(computerChoice==="Paper") {result.textContent = "You win! Scissors beat Paper!"; humanScore++;}
        if(computerChoice==="Rock") {result.textContent ="You lose! Rock beats Scissors!"; computerScore++;}
    }

    // game lasts for 5 rounds
    // while(computerScore+humanScore<=4) {
    //     let humanChoice = getHumanChoice();
    //     let computerChoice = getComputerChoice();
    //     playRound(humanChoice, computerChoice);
    // }

    // after 5 rounds the winner is announced
    // if(computerScore+humanScore==5) {
    //     if(computerScore>humanScore) {console.log("You lost! Computer won!")}
    //     else {console.log("You won! Computer lost!")}
    // }
}

// playGame();

let buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playGame(button.id);
           
        })
    })
