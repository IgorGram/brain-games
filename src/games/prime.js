import { cons } from 'hexlet-pairs';
import runGame from '..';


const getRundomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

const isCorrect = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
// get pair of question and correct answer
const getGamePair = () => {
  const randomNumber = getRundomNumber(1, 100);
  const correctAnswer = isCorrect(randomNumber) ? 'yes' : 'no';
  return cons(randomNumber, correctAnswer);
};
// start game
const startPrimeGame = () => {
  const gameName = 'Is this number prime?';
  runGame(gameName, getGamePair);
};

export default startPrimeGame;
