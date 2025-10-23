console.log("Hello, World!");

function getComputerChoice() {
    const choices = ['rock','paper','scissors']
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let humanScore=0;
let computerScore=0;

// function playGame() {
//     for (let i=0; i<5; i++) {
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         let scores = playRound(humanChoice, computerChoice);
//         console.log(`Round ${i+1}: You chose ${humanChoice}, Computer chose ${computerChoice}.`);
//         console.log(`Scores: You - ${scores[0]}, Computer - ${scores[1]}`);
//     }
// }

const container = document.createElement("div");
container.style.textAlign = "center";
container.style.marginTop = "50px";

const choices = ["rock", "paper", "scissors"];
choices.forEach(choice => {
    const button = document.createElement("button");
    button.textContent = choice[0].toUpperCase() + choice.slice(1);
    button.style.margin = "10px";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.addEventListener("click", () => playRound(choice));
    container.appendChild(button);
});

const result = document.createElement("div");
const score = document.createElement("div");
const winner = document.createElement("div");
result.style.margin = "20px";
score.style.margin = "10px";
winner.style.margin = "20px";
winner.style.fontweight = "bold";
winner.style.fontsize = "20px";
container.appendChild(result);
container.appendChild(score);
container.appendChild(winner);
document.body.appendChild(container);

function playRound(humanChoice) {
    if (humanScore >= 5 || computerScore >= 5) return;
    const computerChoice = getComputerChoice();
    let res = "";
    if (humanChoice === computerChoice) {
        result = `It's a Tie! You both chose ${playerSelection}.`;
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
             (humanChoice === 'paper' && computerChoice === 'rock') ||
             (humanChoice === 'scissors' && computerChoice === 'paper')) {
        humanScore++;
        res = `You win this round! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        res = `You lose this round! ${computerChoice} beats ${humanChoice}`;
    }
    result.textContent = res;
    score.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
    if (humanScore === 5 || computerScore === 5){
        winner.textContent = humanScore === 5 ? 'You Won!! Congrats!' : 'Computer Won!! Try Again';
    }
}
