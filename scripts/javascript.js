function getComputerChoice () {
    let randomNumber = Math.random();
    return randomNumber <= 0.33 ? "rock" : randomNumber <= 0.66 ? "paper" : "scissors"
}

function getUserChoice () {
    let input
    let validInput = false
    while (!validInput) {
        input = prompt("Your choice: ").toLowerCase();
        if (input !== "rock" && input !== "paper" && input !== "scissors") {
            alert("Please choose a correct type ('rock', 'paper' or 'scissors'), input is case-insensitive");
        } else {
            validInput = true;
        }
    }
    return input
}

let userScore = 0
let computerScore = 0

function playRound (userChoice, computerChoice) {
    let victoryState = calcVictoryState(userChoice, computerChoice)
    if (victoryState === "won") {
        userScore++
        console.log(`You won! ${userChoice} beats ${computerChoice}.`)
    } else if (victoryState === "lost") {
        computerScore++
        console.log(`You lost! ${userChoice} loses against ${computerChoice}.`)
    } else {
        console.log(`You drew! You both used ${userChoice}.`)
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

let userChoice = getUserChoice()
let computerChoice = getComputerChoice()

playRound(userChoice, computerChoice)