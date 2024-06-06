// logic for a Rock, Paper, Scissors game

const playerChoice = document.querySelector(".playerChoice");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const pcChoice = document.querySelector("#pcChoice");
const narrator = document.querySelector(".narrator");
const playerScore = document.querySelector(".scoreBoard .playerScore");
const pcScore = document.querySelector(".scoreBoard .pcScore");


playerChoice.addEventListener("click", handlePlayerChoice);

function handlePlayerChoice(event) {
    let target = event.target;
    switch (`${target.id}-${event.type}`) {
        case "rock-click":
            console.log("rock was clicked");
            roundPlay(getUserMove(target.id), getComputerChoice());
            break;
        
        case "paper-click":
            console.log("paper was clicked");
            roundPlay(getUserMove(target.id), getComputerChoice());
            break;
        
        case "scissors-click":
            console.log("scissors was clicked");
            roundPlay(getUserMove(target.id), getComputerChoice());
            break;
    }
}


let moves_list = ["rock", "paper", "scissors"];

function getUserMove(move) {
    let player_move = move;
    let formatted_player_move = player_move.toLowerCase();
    if (moves_list.includes(formatted_player_move)) {
        console.log("player: " + formatted_player_move);
        return formatted_player_move;
    } else {
        alert("Your move is not valid. Refresh to try again.");
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
    switch (imgName) {
        case "rock":
            pcChoice.src = "images/rock.png";
            break;
        case "paper":
            pcChoice.src = "images/paper.png";
            break;
        case "scissors":
            pcChoice.src = "images/scissors.png";
        default:
            break;
    }
}

function roundPlay(playerSelection, computerSelection) {
    // this function returns the winner of the round
    if (playerSelection == computerSelection) {
        // draw
        let drawMessage = (`That's a draw, the player and the computer chose the same move!`);
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
    let player_score = 0;
    let pc_score = 0;
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



// roundPlay(getUserMove(), getComputerChoice())

// playGame()