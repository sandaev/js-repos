//DECLARE CONSTANT VARIABLES TO REFERENCE DOM ELEMENTS

const message = document.querySelector('.message');
const playerScoreDom = document.querySelector('#playerScore');
const playerIconDom = document.querySelector('.show-player i');
const computerScoreDom = document.querySelector('#computerScore');
const computerIconDom = document.querySelector('.show-computer i');
const instruction = document.querySelector('#instruction');
const buttons = document.querySelectorAll('button');

//AVAILABLE SELECTIONS
const iconList = ['fas fa-hand-rock', 'fas fa-hand-paper', 'fas fa-hand-scissors'];

//OTHER VARIABLES
let playerScore = 0;
let computerScore = 0;
let round = 0;



 for(let i = 0; i<buttons.length; i++){
    buttons[i].addEventListener('click', () =>{
        //Set computer icon 
        let computerIcon = iconList[Math.floor(Math.random()*iconList.length)];
        computerIconDom.className = computerIcon;

        //Player move
        playerIconDom.className = buttons[i].className;
        
        //SCORE GAME
        //draw
        if(playerIconDom.className === computerIconDom.className){
            round+=1;
            instruction.textContent = `Round: ${round}`;
            message.textContent = `Draw!`

        }

        if(playerIconDom.className === iconList[0] && computerIconDom.className === iconList[1]){
            round+=1;
            computerScore+=1;
            computerScoreDom.textContent = computerScore;
            instruction.textContent = `Round: ${round}`;
            message.textContent = `Computer wins! Paper covers rock!!`;


        }

        if(playerIconDom.className === iconList[1] && computerIcon === iconList[0]){
            round+=1;
            playerScore+=1;
            playerScoreDom.textContent = playerScore;
            message.textContent = `You win! Paper covers rock!!`;
            instruction.textContent =  `Round: ${round}`;
        }

        if(playerIconDom.className === iconList[1] && computerIconDom.className === iconList[2]){
            round+=1;
            computerScore+=1;
            computerScoreDom.textContent = computerScore;
            message.textContent = "Computer wins! Scissors cuts paper!!";
            instruction.textContent = `Round: ${round}`;

        }

        if(playerIconDom.className === iconList[2] && computerIconDom.className === iconList[1]){
            round+=1;
            playerScore+=1;
            playerScoreDom.textContent = playerScore;
            message.textContent = "You win! Scissors cuts paper!!";
            instruction.textContent = `Round: ${round}`;

        }

        if(playerIconDom.className === iconList[0] && computerIconDom.className === iconList[2]){
            round+=1;
            playerScore+=1;
            playerScoreDom.textContent = playerScore;
            message.textContent = "You win! Rock breaks scissors!!";
            instruction.textContent = `Round ${round}`;

        }

        if(playerIconDom.className === iconList[2] && computerIconDom.className === iconList[0]){
            round+=1;
            computerScore+=1;
            computerScoreDom.textContent = computerScore;
            message.textContent = "Computer wins! Rock breaks scissors!!";
            instruction.textContent =   `Round ${round}`;
        }

       if(round > 5){
            instruction.textContent = "Game Over!!!";
            round =0;
            computerScore === playerScore? message.textContent = "Its a draw!!!":
            computerScore > playerScore? message.textContent ="Computer wins!!": message.textContent = "You win!!";
            computerScore=0;
            computerScoreDom.textContent = "0";
            playerScore = 0;
            playerScoreDom.textContent = "0";
            
        }

    })

}





