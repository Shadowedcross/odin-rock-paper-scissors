function getComputerChoice () {
    let randomNumber = Math.random();
    return randomNumber <= 0.33 ? "rock" : randomNumber <= 0.66 ? "paper" : "scissors"
}
console.log(getComputerChoice())