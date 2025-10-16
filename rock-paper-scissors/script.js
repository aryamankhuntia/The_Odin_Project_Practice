console.log("Hello, World!");

function getComputerChoice() {
    const choices = ['rock','paper','scissors']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    choice=prompt("Enter rock, paper or scissors: ");
    choice=choice.toLowerCase();
    return choice;
}

let humanScore=0;
let computerScore=0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return [humanScore,computerScore];
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        return [humanScore,computerScore];
    } else {
        computerScore++;
        return [humanScore,computerScore];
    }
}

function playGame() {
    for (let i=0; i<5; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let scores = playRound(humanChoice, computerChoice);
        console.log(`Round ${i+1}: You chose ${humanChoice}, Computer chose ${computerChoice}.`);
        console.log(`Scores: You - ${scores[0]}, Computer - ${scores[1]}`);
    }
}

playGame();
