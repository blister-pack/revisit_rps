// logic for a Rock, Paper, Scissors game

let moves_list = ["rock", "paper", "scissors"];

function getUserMove() {
    let player_move = prompt("Rock, paper or scissors? Choose your move!");
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
    return moves_list[choice];
}

function roundPlay(playerSelection, computerSelection) {
    // this function returns the winner of the round
    if (playerSelection == computerSelection) {
        // draw
        console.log(`That's a draw, the player and the computer chose the same move!`);
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
        return `You win! ${formatted_playerSelection} beats ${formatted_computerSelection}!`;
    } else {
        // losing message
        return `You lose! ${formatted_computerSelection} beats ${formatted_playerSelection}!`;
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
playGame()