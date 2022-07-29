//ROCK-SCISSORS-PAPER- CONSOLE GAME
let cpScore = 0;
let playerScore = 0;
let message;
let gameState = false;
//let pChoice = prompt("Your choice: (Rock, Scissors, Paper)");
//playerChoice = prompt("Your choice:","Rock, Scissors or Paper?");
//let cpOptions = ["Rock", "Scissors", "Paper"];

function computerChoice () {
    let cpOptions = ["Rock", "Scissors", "Paper"];
    let cpChoice;
    cpChoice = cpOptions[Math.floor(Math.random()*cpOptions.length)];
    return cpChoice;
};


function gameLogic(playerChoice, computer) {
    if(playerChoice.toLowerCase() == "rock" && computer == "Scissors" ){
        message = "You win! Rock breaks scissors";
        ++playerScore;
        console.log(message);
        //console.log(playerScore);
        
    }
    if(playerChoice.toLowerCase() == "scissors" && computer == "Rock") {
        message = "Computer wins! Rock breaks scissors";
        ++cpScore;
        console.log(message);
        //console.log(cpScore);
    }
    if(playerChoice.toLowerCase() == "rock" && computer == "Paper"){
        message = "Computer wins! Paper covers rock";
        ++cpScore;
        console.log(message);
        //console.log(cpScore);

    }
    if(playerChoice.toLowerCase() == "paper" && computer == "Rock") {
        message = "You win Paper covers rock";
        ++playerScore;
        console.log(message);
        //console.log(playerScore);
    }
    if(playerChoice.toLowerCase() == "scissors" && computer == "Paper") {
        message = "You win! Scissors cuts paper";
        ++playerScore;
        console.log(message);
        //console.log(playerScore);
    }
    if(playerChoice.toLowerCase() == "paper" && computer == "Scissors") {
        message = "Computer wins! Scissors cuts paper";
        ++cpScore;
        console.log(message);
        //console.log(cpScore);
    }
    if(playerChoice.toLowerCase() == computer.toLowerCase()){
        message = "Draw!!";
        console.log(message);
    }

}

let options = ["rock", "scissors", "paper"];

for (let i = 1; i <= 3; i++){
    playerChoice = prompt("Your choice:","(Rock, Paper or Scissor)");
    
    if(playerChoice == null){
        console.log("Goodbye...");
        break;
    }
    else if (options.includes(playerChoice.toLowerCase())){
        gameLogic(playerChoice, computerChoice());
    } 
    else{
        console.log("Wrong input!!");
    }

}


if(cpScore > playerScore){
    console.log("Computer wins!!");
    console.log("Computer total Score: "+cpScore+"\nYour total score: "+playerScore);

}
else{
    console.log("You win!!");
    console.log("Your total Score: "+playerScore+"\nComputer's total score: "+cpScore);
}

