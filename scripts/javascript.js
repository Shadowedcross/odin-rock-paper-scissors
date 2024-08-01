function getComputerChoice () {
    let randomNumber = Math.random();
    return randomNumber <= 0.33 ? "rock" : randomNumber <= 0.66 ? "paper" : "scissors"
}

function getUserChoice () {
    let input
    let validInput = false
    while (!validInput) {
        let rawInput = prompt("Your choice: ")

        if (rawInput === null || rawInput === '') {
            input = null
            break;
        } else {
            input = rawInput.toLowerCase()
        }

        if (input !== "rock" && input !== "paper" && input !== "scissors") {
            alert("Please choose a correct type ('rock', 'paper' or 'scissors'), input is case-insensitive");
        } else {
            validInput = true;
        }
    }
    return input
}

const DEFAULT_ROUNDS_TO_PLAY = 5

function playGame (roundsToPlay = DEFAULT_ROUNDS_TO_PLAY) {

    function playRound (userChoice, computerChoice, currentRound) {
        let victoryState = calcVictoryState(userChoice, computerChoice)
        if (victoryState === "won") {
            userScore++
            console.log(`Round ${currentRound}: You won! ${userChoice} beats ${computerChoice}.`)
        } else if (victoryState === "lost") {
            computerScore++
            console.log(`Round ${currentRound}: You lost! ${userChoice} loses against ${computerChoice}.`)
        } else {
            console.log(`Round ${currentRound}: You drew! You both used ${userChoice}.`)
        }
        if (victoryState === "drew") {
            console.log(`Current Scores: User: ${userScore} Computer: ${computerScore}`)
        } else {
            console.log(`New Scores: User: ${userScore} Computer: ${computerScore}`)
        }
    }

    function calcVictoryState(userChoice, computerChoice) {
        let victoryState
        if (userChoice === "rock") {
            victoryState = computerChoice === "rock" ? "drew" : computerChoice === "paper" ? "lost" : "won"
        } else if (userChoice === "paper") {
            victoryState = computerChoice === "rock" ? "won" : computerChoice === "paper" ? "drew" : "lost"
        } else if (userChoice === "scissors") {
            victoryState = computerChoice === "rock" ? "lost" : computerChoice === "paper" ? "won" : "drew"
        }
        return victoryState
    }

    let userScore = 0
    let computerScore = 0
    let userCanceled = false

    for (let i = 0; i < roundsToPlay; i++) {
        let userChoice = getUserChoice()
        if (userChoice === null) {
            console.log("User Canceled")
            userCanceled = true
            break;
        }
        let computerChoice = getComputerChoice()
        playRound(userChoice, computerChoice, i + 1)
    }

    if (!userCanceled) {
        if ( userScore > computerScore) {
            console.log(`Congratulations, you won!\nEnd scores: User: ${userScore} Computer: ${computerScore}`)
        } else if (userScore < computerScore) {
            console.log(`You lost! Better luck next time.\nEnd Scores: User: ${userScore} Computer: ${computerScore}`)
        } else {
            console.log(`You drew! Maybe a rematch is in order? End Scores: User: ${userScore} Computer: ${computerScore}`)
        }
    }
}

playGame()