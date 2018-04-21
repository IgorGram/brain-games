import { cons } from 'hexlet-pairs';
import runGame from '..';

// get pair of question and correct answer
const getGamePair = () => {
  const min = 1;
  const max = 20;
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  const correctAnswer = randomNumber % 2 ? 'no' : 'yes';
  return cons(randomNumber, correctAnswer);
};
// start game
const startEvenGame = () => {
  const gameName = 'Answer "yes" if number even otherwise answer "no".';
  runGame(gameName, getGamePair);
};

export default startEvenGame;
