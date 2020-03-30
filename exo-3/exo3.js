// you can write js here
console.log('exo-3');

var wrongchoice = 'You must be choice rock or paper or scissor'
let rock = "rock" ;
let paper = "paper";
let scissor = "scissor";
let bomb = "bomb";
let computerInput = [rock , paper , scissor];

 function getUserChoice(userInput){
     if (userInput === rock) {
         return rock
     }
     if (userInput === paper) {
         return paper
     }
     if (userInput === scissor) {
         return scissor
     }
     if (userInput === bomb) {
         return bomb
     }
     else
     {
         return wrongchoice
     }
}


function getComputerChoise() {
   let choice = Math.floor(Math.random()*3)
    return computerInput[choice]
}


function determineWinner(userChoice,computerChoice){

     let tied = "Pas de vainqueur , on rejoue ?"
     let won = " Je suis trop fort"
    let lost = " Ta eu de la chance, on rejoue?"

     if (userChoice === computerChoice) {
         return tied
     }
    if (userChoice === bomb) {
         return won
      }
     if ( userChoice === rock ){
         if (computerChoice === scissor){
             return won
         }
         else {
             return lost
         }
     }
     if (userChoice === paper){
         if (computerChoice === rock){
             return won
         }
         else {
             return lost
         }
     }
     if (userChoice === scissor){
         if (computerChoice === paper){
             return won
         }
         else {
             return lost
         }
     }
}

function playGame() {
     let uchoice = getUserChoice('paper');
    let computerChoise = getComputerChoise();
    return console.log( `${computerChoise}  ${uchoice} ${determineWinner(uchoice,computerChoise)}`)
}
