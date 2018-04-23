import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomNumber from '../utils/utils';

const getGcd = (a, b) => {
  if (b > 0) {
    const c = a % b;
    return getGcd(b, c);
  }
  return a;
};
// get pair of question and correct answer
const getGamePair = () => {
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);
  const randomExpression = `${firstNumber} ${secondNumber}`;

  const correctAnswer = getGcd(firstNumber, secondNumber);
  return cons(randomExpression, String(correctAnswer));
};
// start game
const startGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, getGamePair);
};

export default startGcdGame;
