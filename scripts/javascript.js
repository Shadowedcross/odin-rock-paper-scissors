let userChoice;
let userScore = 0;
let computerScore = 0;

let results = document.querySelector(".results");
let score = document.querySelector(".score");
let choiceButtonsContainer = document.querySelector(".choice-buttons-container")

const POINTS_FOR_VICTORY = 5
let gameEnded = false

function getComputerChoice () {
    let randomNumber = Math.random();
    return randomNumber <= 0.33 ? "rock" : randomNumber <= 0.66 ? "paper" : "scissors"
}

function playRound (userChoice) {
    let computerChoice = getComputerChoice()
    let roundVictoryState = calcRoundVictoryState(userChoice, computerChoice)
    if (roundVictoryState === "won") {
        userScore++
        updateResults(`You won! ${userChoice} beats ${computerChoice}.`)
    } else if (roundVictoryState === "lost") {
        computerScore++
        updateResults(`You lost! ${userChoice} loses against ${computerChoice}.`)
    } else {
        updateResults(`You drew! You both used ${userChoice}.`)
    }
    if (roundVictoryState !== "drew") {
        updateScore()
    }
}

function calcRoundVictoryState(userChoice, computerChoice) {
    let roundVictoryState
    if (userChoice === "rock") {
        roundVictoryState = computerChoice === "rock" ? "drew" : computerChoice === "paper" ? "lost" : "won"
    } else if (userChoice === "paper") {
        roundVictoryState = computerChoice === "rock" ? "won" : computerChoice === "paper" ? "drew" : "lost"
    } else if (userChoice === "scissors") {
        roundVictoryState = computerChoice === "rock" ? "lost" : computerChoice === "paper" ? "won" : "drew"
    }
    return roundVictoryState
}

function updateResults (value) {
    results.textContent = value;
}

function updateScore () {
    score.textContent = `You ${userScore} : ${computerScore} Computer`
    if (userScore === POINTS_FOR_VICTORY) {
        setGameWinner("user");
    } else if (computerScore === POINTS_FOR_VICTORY) {
        setGameWinner("computer");
    }
}

function setGameWinner(value) {
    gameEnded = true
    disableButtons()
    if (value === "user") {
        updateResults("Congratulations! You were the first to reach 5 points!")
    } else {
        updateResults("Unlucky! The computer reached 5 points before you.")
    }
}

function disableButtons() {
    for (const button of choiceButtonsContainer.children) {
        button.setAttribute("disabled", "disabled")
    }
}

choiceButtonsContainer.addEventListener("click", (event) => {
    let target = event.target;
    userChoice = target.className;
    playRound(userChoice, getComputerChoice())
})