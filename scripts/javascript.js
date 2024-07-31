function getComputerChoice () {
    let randomNumber = Math.random();
    return randomNumber <= 0.33 ? "rock" : randomNumber <= 0.66 ? "paper" : "scissors"
}

console.log(getComputerChoice())

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

console.log(getUserChoice())

let userScore = 0
let computerScore = 0
