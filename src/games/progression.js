import { cons } from 'hexlet-pairs';
import runGame from '..';

const getProgressionString = (length, startNumber, step, indexFadeNumber) => {
  let number = startNumber;
  if (length === indexFadeNumber) {
    number = '..';
  }
  if (length === 1) {
    return `${number}`;
  }
  return `${number} ${getProgressionString(length - 1, startNumber + step, step, indexFadeNumber)}`;
};


const getCorrectAnswer = (progression, step, startNumber) => {
  const progresArr = progression.split(' ');
  const indexFadeNumber = progresArr.indexOf('..');
  if (indexFadeNumber === 0) {
    return `${startNumber}`;
  }
  return `${Number(progresArr[indexFadeNumber - 1]) + step}`;
};

const getRundomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};
// get pair of question and correct answer
const getGamePair = () => {
  const startNumber = getRundomNumber(1, 20);
  const step = getRundomNumber(1, 5);
  const indexFadeNumber = getRundomNumber(1, 10);
  const progression = getProgressionString(10, startNumber, step, indexFadeNumber);
  const correctAnswer = getCorrectAnswer(progression, step, startNumber);
  return cons(progression, correctAnswer);
};
// start game
const startEvenGame = () => {
  const gameName = 'What number is missing in this progression?';
  runGame(gameName, getGamePair);
};

export default startEvenGame;
