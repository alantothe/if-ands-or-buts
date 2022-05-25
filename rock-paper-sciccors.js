// rock-paper-scissors.js
// Let's play a classic game of rock, paper, scissors!

// Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.

// The players can only input "rock", "paper", and "scissors". Anything else should result in a failure message getting logged to the screen. After both players input their options, use console.log() to print the player who emerged victorious.

// For those who are unfamiliar, rock beats scissors, scissors beats paper, and paper beats rock. If both players input the same answer, it should result in a draw.

// An example game

// Player 1, enter "rock", "paper", or "scissors":
// > rock
// Player 2, enter "rock", "paper", or "scissors":
// > paper
// Player 2 wins!

const prompt = require('prompt-sync')({sigint: true});

// let rock ="rock"

// let paper="paper"

// let scissors ="scissors"



let input1 = prompt ("Player 1, enter rock, paper, or scissors:" )

let input2 = prompt ("Player 2, enter rock, paper, or scissors:" )

if (input1 === "paper" && input2 === "rock") {
    console.log("Player 1 Wins!")
}
if(input1 === "rock" && input2 === "paper"){
    console.log("Player 2 Wins!")
}
if (input1 === "scissors" && input2 === "paper") {
    console.log("Player 1 Wins")
}
if (input1 === "paper" && input2 === "scissors") {
    console.log("Player 2 Wins")
}
if (input1 === "rock" && input2 === "scissors") {
    console.log("Player 1 Wins")
}
if (input1 === "scissors" && input2 === "rock") {
    console.log("Player 2 Wins")
}








