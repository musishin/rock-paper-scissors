function computerPlay() {
    let computerChoice = '';
    let randomNum = Math.floor(Math.random() * Math.floor(3));

    if(randomNum == 0) {
        computerChoice = 'rock';
    }
    else if(randomNum == 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    
    return computerChoice;
}


function playRound(playerSelection, computerSelection) {
    const ROCK = "ROCK";
    const PAPER = "PAPER";
    const SCISSORS = "SCISSORS";
    let playerSelect = String(playerSelection).toUpperCase();
    let computerSelect = String(computerSelection).toUpperCase();

    /* prevents function from running if someone reaches 5 points */
    if(playerScore === 5 || computerScore === 5) {
        return;
    }

    playerChoice.classList.remove('imgAppear-rock', 'imgAppear-paper', 'imgAppear-scissors');
    computerChoice.classList.remove('imgAppear-rock', 'imgAppear-paper', 'imgAppear-scissors');

    if(playerSelect === ROCK && computerSelect === ROCK) {
        playerChoice.classList.add('imgAppear-rock');
        computerChoice.classList.add('imgAppear-rock');
        results.textContent = 'rock vs. rock! Tie!';
    }
    else if(playerSelect === PAPER && computerSelect === PAPER) {
        playerChoice.classList.add('imgAppear-paper');
        computerChoice.classList.add('imgAppear-paper');
        results.textContent = 'paper vs. paper! Tie!';
    }
    else if(playerSelect === SCISSORS && computerSelect === SCISSORS) {
        playerChoice.classList.add('imgAppear-scissors');
        computerChoice.classList.add('imgAppear-scissors');
        results.textContent = 'scissors vs. scissors! Tie!';
    }
    else if((playerSelect === ROCK) && (computerSelect === SCISSORS)) {
        playerChoice.classList.add('imgAppear-rock');
        computerChoice.classList.add('imgAppear-scissors');
        playerScore++;
        playerPoints.textContent = 'Player Score: ' + playerScore;
        results.textContent = 'rock vs. scissors! You win!';
    }
    else if((playerSelect === ROCK) && (computerSelect === PAPER)) {
        playerChoice.classList.add('imgAppear-rock');
        computerChoice.classList.add('imgAppear-paper');
        computerScore++;
        computerPoints.textContent = 'Computer Score: ' + computerScore;
        results.textContent = 'rock vs. paper! You lose...';
    }
    else if((playerSelect === PAPER) && (computerSelect === ROCK)) {
        playerChoice.classList.add('imgAppear-paper');
        computerChoice.classList.add('imgAppear-rock');
        playerScore++;
        playerPoints.textContent = 'Player Score: ' + playerScore;
        results.textContent = 'paper vs. rock! You win!';
    }
    else if((playerSelect === PAPER) && (computerSelect === SCISSORS)) {
        playerChoice.classList.add('imgAppear-paper');
        computerChoice.classList.add('imgAppear-scissors');
        computerScore++;
        computerPoints.textContent = 'Computer Score: ' + computerScore;
        results.textContent = 'paper vs. scissors! You lose...';
    }
    else if((playerSelect === SCISSORS) && (computerSelect === PAPER)) {
        playerChoice.classList.add('imgAppear-scissors');
        computerChoice.classList.add('imgAppear-paper');
        playerScore++;
        playerPoints.textContent = 'Player Score: ' + playerScore;
        results.textContent = 'scissors vs. paper! You win!';
    }
    else if((playerSelect === SCISSORS) && (computerSelect === ROCK)) {
        playerChoice.classList.add('imgAppear-scissors');
        computerChoice.classList.add('imgAppear-rock');
        computerScore++;
        computerPoints.textContent = 'Computer Score: ' + computerScore;
        results.textContent = 'scissors vs. rock! You lose...';
    }

    checkScore();
}


function checkScore() {
    if(playerScore === 5) {
        results.textContent = 'Congratulations! You win the game!';
        results.appendChild(replayBtn);
    }
    else if(computerScore === 5) {
        results.textContent = 'Sorry, you lost the game...';
        results.appendChild(replayBtn);
    }
}


function gameReset() {
    playerScore = 0;
    computerScore = 0;
    results.removeChild(replayBtn);
    playerPoints.textContent = 'Player Score: ' + playerScore;
    computerPoints.textContent = 'Computer Score: ' + computerScore;
    results.innerHTML = 'Get ready to play... First to 5 wins!' + '<br>' + 'Make a selection to begin the game.';
    playerChoice.classList.remove('imgAppear-rock', 'imgAppear-paper', 'imgAppear-scissors');
    computerChoice.classList.remove('imgAppear-rock', 'imgAppear-paper', 'imgAppear-scissors');
    playerChoice.classList.add('imgAppear-rock');
    computerChoice.classList.add('imgAppear-rock');
}


const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const playerChoice = document.querySelector('.playerChoice');
const computerChoice = document.querySelector('.computerChoice');
const results = document.querySelector('#results');
const replayBtn = document.createElement('button');
let playerScore = 0;
let computerScore = 0;


/* sets up replay button */

replayBtn.classList.add('replayBtn');
replayBtn.textContent = 'Play Again';
replayBtn.addEventListener('click', gameReset);


/* adds event listener to buttons to call playRound function on click */

rockButton.addEventListener('click', function() {
    playRound('rock', computerPlay());
});
paperButton.addEventListener('click', function() {
    playRound('paper', computerPlay());
});
scissorsButton.addEventListener('click', function() {
    playRound('scissors', computerPlay());
});


/* displays initial scores and images before game starts */

playerPoints.textContent = 'Player Score: ' + playerScore;
computerPoints.textContent = 'Computer Score: ' + computerScore;
playerChoice.classList.add('imgAppear-rock');
computerChoice.classList.add('imgAppear-rock');