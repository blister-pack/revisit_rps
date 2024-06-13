// logic for a Rock, Paper, Scissors game

const playerChoice = document.querySelector(".playerChoice");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const pcChoice = document.querySelector("#pcChoice");
const narrator = document.querySelector(".narrator");
const playerScore = document.querySelector(".scoreBoard .playerScore");
const pcScore = document.querySelector(".scoreBoard .pcScore");
const roundDisplay = document.querySelector(".roundDisplay .roundNumber")

let player_score = 0;
let pc_score = 0;
let round_count = 0;

let moves_list = ["rock", "paper", "scissors"];

playerChoice.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {
    // let target = event.target;
    let playerMove = event.target.id;
    console.log("player: " + playerMove);

    // let's do something that works before making something pretty
    // there should be a for cycle or similar that replaces the need for
    // initializing a counting variable


    if (round_count < 5) {
        let roundResult = roundPlay(playerMove, getComputerChoice());
        scoreCounter(roundResult);
        roundCounter();
    }
    
    if (round_count === 5) {
        setTimeout(() => {
            console.log("game over");
            alert("Game over!");
            gameWinnerAnnounce();
        }, 50);
    }
}

function getComputerChoice() {
    // this function returns the choice of the computer (random)
    let choice = Math.floor(Math.random() * 3);

    // 0 is rock; 1 is paper; 2 is scissors
    console.log("pc: " + moves_list[choice]);
    changeComputerChoiceImage(moves_list[choice]);
    return moves_list[choice];
}

function changeComputerChoiceImage(imgName) {
    pcChoice.src = `images/${imgName}.png`;
}

function roundPlay(playerSelection, computerSelection) {
    // this function returns the winner of the round
    if (playerSelection == computerSelection) {
        // draw
        let drawMessage = (`Draw! The player and computer chose the same move!`);
        console.log(drawMessage);
        narrator.textContent = drawMessage;
        return `draw`;
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper"))
    {
        // win
        return `win`;
    } else {
        // lose
        return `lose`
    }

}

function roundCounter(rounds=5) {
    // a function that sets how many rounds should be played in a game
    round_count++;
    roundDisplay.textContent = `${round_count}/5`;
}

function scoreCounter(roundResult) {
    // a function that keeps track of player and pc score, also showing it on the GUI
    if (roundResult === "win") {
        player_score++;
        playerScore.textContent = player_score;
    } else if (roundResult === "lose") {
        pc_score++;
        pcScore.textContent = pc_score;
    }
}

function roundResultAnnounce(roundResult) {
    // Generates a message that announces the result of a round.
    if (roundResult==="win") {
        // victory message
    } else if (roundResult==="lose") {
        // loss message
    } else {
        // draw message
    }
}

function gameWinnerAnnounce(player_Score=player_score, pc_Score=pc_score) {
    // this function announces the game winner after the game is over
    let victoryMessage = "";
    if (player_Score === pc_Score) {
        victoryMessage = "It's a draw!";
    } else if (player_Score > pc_Score) {
        victoryMessage = "You win! Take that, computer!";
    } else {
        victoryMessage = "You lost! It's okay to cry!";
    }

    narrator.textContent = victoryMessage;
}

// roundPlay(getUserMove(), getComputerChoice())

// playGame()