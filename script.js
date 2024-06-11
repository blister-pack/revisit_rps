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
    } else {
        console.log("game over");
        alert("Game over!")
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
    // scoreCounter();
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
        console.log(roundResultMessage(true, playerSelection, computerSelection));
        return `win`;
    } else {
        // lose
        console.log(roundResultMessage(false, playerSelection, computerSelection));
        return `lose`
    }

}

function roundResultMessage(win = true, playerSelection, computerSelection) {
    // this is just meant to capitalize the moves, yes this could have probably been avoided
    let formatted_playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    let formatted_computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);


    if (win === true) {
        // victory message
        let victoryMessage = `You win! ${formatted_playerSelection} beats ${formatted_computerSelection}!`;
        narrator.textContent = victoryMessage;
        return victoryMessage;
    } else {
        // losing message
        let lossMessage = `You lose! ${formatted_computerSelection} beats ${formatted_playerSelection}!`;
        narrator.textContent = lossMessage;
        return lossMessage;
    }
}

function playGame() {
    // this function plays a game of janken with 5 rounds
    // let player_score = 0;
    // let pc_score = 0;
    // let round_end_message = (roundPlay(getUserMove(), getComputerChoice()));
    // console.log(round_end_message);

    for (let index = 0; index < 5; index++) {
        // each loop is a round
        let round_end_message = (roundPlay(getUserMove(), getComputerChoice()));
        console.log(round_end_message);

        if (round_end_message.includes("draw") === true) {
            continue;
        } else if (round_end_message.includes("win") === true) {
            player_score++;
        } else if (round_end_message.includes("lose") === true) {
            pc_score++;
        }
        // if one of these messages had both keywords, would it increment in both places?
        console.log(`PLAYER SCORE: ${player_score}`);
        console.log(`PC SCORE: ${pc_score}`);
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

// roundPlay(getUserMove(), getComputerChoice())

// playGame()