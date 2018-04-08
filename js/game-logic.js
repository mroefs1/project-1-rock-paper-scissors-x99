// All code should be written in this file

//player one globals
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;
let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;
//player two globals
let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;
let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType,
  moveTwoValue, moveThreeType, moveThreeValue){
  //Check for undefined inputs
  //don't set moves if a move type is missing
  if(moveOneType === undefined || moveTwoType === undefined || moveThreeType === undefined || moveOneValue === undefined || moveTwoValue === undefined || moveThreeValue === undefined){
    return;
  }
  //check validity of types
  moveOneType.toLowerCase();
  moveTwoType.toLowerCase();
  moveThreeType.toLowerCase();
  if(moveOneType != 'rock' && moveOneType != 'paper' && moveOneType != 'scissors'){
    return;
  }
  if(moveTwoType != 'rock' && moveTwoType != 'paper' && moveTwoType != 'scissors'){
    return;
  }
  if(moveThreeType != 'rock' && moveThreeType != 'paper' && moveThreeType != 'scissors'){
    return;
  }

  //check validity of values
  if(moveOneValue + moveTwoValue + moveThreeValue > 99){return;}
  if(moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1){return;}
  if(moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99){return;}

  //main functionality.
    switch(player){
      case 'Player One':
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
        break;
      case 'Player Two':
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
        break;
      default:
        console.log('Error: player is not Player One or Player Two.');
        break;
    }
  }

function getRoundWinner(roundNumber){
  //find the winner of the round, checking for undefined values as we go
  switch(roundNumber){
    case 1:
      if(playerOneMoveOneType === undefined || playerOneMoveOneValue === undefined ||
         playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined){
        return null;
      }
      if(playerOneMoveOneType === 'rock'){
        if(playerTwoMoveOneType === 'paper'){return 'Player Two';}
        if(playerTwoMoveOneType === 'scissors'){return 'Player One';}
        if(playerTwoMoveOneType === 'rock'){
          if(playerOneMoveOneValue > playerTwoMoveOneValue){
            return 'Player One';
          }
          else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      if(playerOneMoveOneType === 'paper'){
        if(playerTwoMoveOneType === 'scissors'){return 'Player Two';}
        if(playerTwoMoveOneType === 'rock'){return 'Player One';}
        if(playerTwoMoveOneType === 'paper'){
          if(playerOneMoveOneValue > playerTwoMoveOneValue){
            return 'Player One';
          }
          else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      if(playerOneMoveOneType === 'scissors'){
        if(playerTwoMoveOneType === 'rock'){return 'Player Two';}
        if(playerTwoMoveOneType === 'paper'){return 'Player One';}
        if(playerTwoMoveOneType === 'scissors'){
          if(playerOneMoveOneValue > playerTwoMoveOneValue){
            return 'Player One';
          }
          else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      break;
    case 2:
      if(playerOneMoveTwoType === undefined || playerOneMoveTwoValue === undefined ||
        playerTwoMoveTwoType === undefined || playerTwoMoveTwoValue === undefined){
          return null;
        }
      if(playerOneMoveTwoType === 'rock'){
        if(playerTwoMoveTwoType === 'paper'){return 'Player Two';}
        if(playerTwoMoveTwoType === 'scissors'){return 'Player One';}
        if(playerTwoMoveTwoType === 'rock'){
          if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
            return 'Player One';
          }
          else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      if(playerOneMoveTwoType === 'paper'){
        if(playerTwoMoveTwoType === 'scissors'){return 'Player Two';}
        if(playerTwoMoveTwoType === 'rock'){return 'Player One';}
        if(playerTwoMoveTwoType === 'paper'){
          if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
            return 'Player One';
          }
          else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      if(playerOneMoveTwoType === 'scissors'){
        if(playerTwoMoveTwoType === 'rock'){return 'Player Two';}
        if(playerTwoMoveTwoType === 'paper'){return 'Player One';}
        if(playerTwoMoveTwoType === 'scissors'){
          if(playerOneMoveTwoValue > playerTwoMoveTwoValue){
            return 'Player One';
          }
          else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      break;
    case 3:
      if(playerOneMoveThreeType === undefined || playerOneMoveThreeValue === undefined ||
        playerTwoMoveThreeType === undefined || playerTwoMoveThreeValue === undefined){
          return null;
        }
      if(playerOneMoveThreeType === 'rock'){
        if(playerTwoMoveThreeType === 'paper'){return 'Player Two';}
        if(playerTwoMoveThreeType === 'scissors'){return 'Player One';}
        if(playerTwoMoveThreeType === 'rock'){
          if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
            return 'Player One';
          }
          else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      if(playerOneMoveThreeType === 'paper'){
        if(playerTwoMoveThreeType === 'scissors'){return 'Player Two';}
        if(playerTwoMoveThreeType === 'rock'){return 'Player One';}
        if(playerTwoMoveThreeType === 'paper'){
          if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
            return 'Player One';
          }
          else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      if(playerOneMoveThreeType === 'scissors'){
        if(playerTwoMoveThreeType === 'rock'){return 'Player Two';}
        if(playerTwoMoveThreeType === 'paper'){return 'Player One';}
        if(playerTwoMoveThreeType === 'scissors'){
          if(playerOneMoveThreeValue > playerTwoMoveThreeValue){
            return 'Player One';
          }
          else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
            return 'Player Two';
          }else{
            return 'Tie';
          }
        }
      }
      break;
    default:
      return null;
  }
}

function getGameWinner(){
  let roundOneWinner = getRoundWinner(1);
  let roundTwoWinner = getRoundWinner(2);
  let roundThreeWinner = getRoundWinner(3);
  let playerOneWins = 0;
  let playerTwoWins = 0;
  let ties = 0;
  //check for undefined values/types
  if(playerOneMoveOneType === undefined || playerOneMoveOneValue === undefined ||
     playerOneMoveTwoType === undefined || playerOneMoveTwoValue === undefined ||
      playerOneMoveThreeType === undefined || playerOneMoveThreeValue === undefined){
    return null;
  }
  if(playerTwoMoveOneType === undefined || playerTwoMoveOneValue === undefined ||
     playerTwoMoveTwoType === undefined || playerTwoMoveTwoValue === undefined ||
      playerTwoMoveThreeType === undefined || playerTwoMoveThreeValue === undefined){
    return null;
  }

  //find round one winner
  if(roundOneWinner === 'Player One'){
    playerOneWins++;
  }else if(roundOneWinner === 'Player Two'){
    playerTwoWins++;
  }else{
    ties++;
  }
  //find round two winner
  if(roundTwoWinner === 'Player One'){
    playerOneWins++;
  }else if(roundTwoWinner === 'Player Two'){
    playerTwoWins++;
  }else{
    ties++;
  }
  //find round three winnner
  if(roundThreeWinner === 'Player One'){
    playerOneWins++;
  }else if(roundThreeWinner === 'Player Two'){
    playerTwoWins++;
  }else{
    ties++;
  }
  //return the winner of the game
  if(playerOneWins > playerTwoWins){
    return 'Player One';
  }else if (playerOneWins < playerTwoWins){
    return 'Player Two';
  }else{
    return 'Tie';
  }
}

function setComputerMoves(){
  const acceptableMoves = ['rock', 'paper', 'scissors'];
  //first get three moves for the computer player two
  let rand = getRandomIntInclusive(0,2);
  playerTwoMoveOneType = acceptableMoves[rand];
  rand = getRandomIntInclusive(0,2);
  playerTwoMoveTwoType = acceptableMoves[rand];
  rand = getRandomIntInclusive(0,2);
  playerTwoMoveThreeType = acceptableMoves[rand];

  //now get the values for the three moves, making sure they add to 99
  let totalValue = 0;
  rand = getRandomIntInclusive(1,99);
  playerTwoMoveOneValue = rand;
  totalValue += rand;
  rand = getRandomIntInclusive(1, (99 - totalValue));
  playerTwoMoveTwoValue = rand;
  totalValue += rand;
  rand = getRandomIntInclusive(1, (99 - totalValue));
  playerTwoMoveThreeValue = rand;
  totalValue += rand;
}

//helper function to get random values between min and max, inclusive. used by setComputerMoves
function getRandomIntInclusive(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max-min+1)) + min;
}
