// you can write js here
console.log('exo-3');

const wrongchoice = 'You must be choice rock or paper or scissor'
const rock = "rock" ;
const paper = "paper";
const scissor = "scissor";
const bomb = "bomb";
const computerInput = [rock , paper , scissor];

 function getUserChoice(userInput){
    //  regarder le switch case
    // switch(userInput){
    //         case rock :
    //            return rock;
    //         case paper :
    //            return paper;
    //         case scissor :
    //            return scissor;
    //         case bomb :
    //            return bomb;
    //     default: wrongchoice;
    //   }

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

         return wrongchoice
}


function getComputerChoise() {
   let choice = Math.floor(Math.random()*3)
    return computerInput[choice]
}


function determineWinner(userChoice,computerChoice){
     // switchcase avec terner

     const tied = "Pas de vainqueur , on rejoue ?";
     const won = " Je suis trop fort";
    const lost = " Ta eu de la chance, on rejoue?";

     if (userChoice === computerChoice) {
         return tied;
     }
    if (userChoice === bomb) {
         return won;
      }
     if ( userChoice === rock ){
         if (computerChoice === scissor){
             return won;
         }
         else {
             return lost
         }
     }
     if (userChoice === paper){
         if (computerChoice === rock){
             return won;
         }
         else {
             return lost
         }
     }
     if (userChoice === scissor){
         if (computerChoice === paper){
             return won;
         }
         else {
             return lost
         }
     }
}

function playGame() {
     let uchoice = getUserChoice('bomb'.toLowerCase());
    let computerChoise = getComputerChoise();
    return console.log( `${computerChoise}  ${uchoice} ${determineWinner(uchoice,computerChoise)}`);
}


