import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomNumber from '../utils/utils';

// get pair of question and correct answer
const getGamePair = () => {
  const operatorsArr = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 30);
  const secondNumber = getRandomNumber(1, 30);
  const operator = operatorsArr[getRandomNumber(0, 2)];
  const randomExpression = `${firstNumber} ${operator} ${secondNumber}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondNumber;
      break;
    default:
      break;
  }
  return cons(randomExpression, String(correctAnswer));
};
// start game
const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getGamePair);
};

export default startCalcGame;
