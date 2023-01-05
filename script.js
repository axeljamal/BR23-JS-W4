let choices = ["r", "p", "s"];
let win = 0
let losses = 0
let ties = 0
let usersChoice = prompt("Choose r, p or s");

let computerChoice = choices[Math.floor(Math.random() * choices.length)]

if (usersChoice === "r" && computerChoice === "s") {
    alert("You win!");
    win = win + 1;
} else if (usersChoice === "r" && computerChoice === "p") {
    alert("You lose!");
    losses = losses + 1;
} if (usersChoice === "s" && computerChoice === "r") {
    alert("You lose!");
    losses = losses + 1;
} if (usersChoice === "s" && computerChoice === "p") {
    alert("You win!");
    win = win + 1;
} if (usersChoice === "p" && computerChoice === "r") {
    alert("You win!");
    win = win + 1;
} if (usersChoice === "p" && computerChoice === "s") {
    alert("You lose!");
    losses = losses + 1;
} if (usersChoice === computerChoice) {
    alert("It's a tie");
    ties = ties + 1;
}

let playAgain = confirm("Would you like to play again?")

while (playAgain === true) {
    function compare("r", "p", "s");
} 
