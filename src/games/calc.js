import { cons } from 'hexlet-pairs';
import runGame from '..';

const getRandomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};
// get pair of question and correct answer
const getGamePair = () => {
  const operatorsArr = ['+', '-', '*'];
  const firstNumber = getRandomNumber(1, 30);
  const secondtNumber = getRandomNumber(1, 30);
  const operator = operatorsArr[getRandomNumber(0, 2)];
  const randomExpression = `${firstNumber} ${operator} ${secondtNumber}`;
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNumber + secondtNumber;
      break;
    case '-':
      correctAnswer = firstNumber - secondtNumber;
      break;
    case '*':
      correctAnswer = firstNumber * secondtNumber;
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
