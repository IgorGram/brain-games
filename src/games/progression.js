import { cons } from 'hexlet-pairs';
import runGame from '..';
import getRandomNumber from '../utils/utils';

// generation member of progression
const getProgressionMember = (startNumber, index, step) => startNumber + ((index) * step);

const getProgression = (length, startNumber, step) => {
  const progressionArr = [startNumber];
  for (let i = 1; i < length; i += 1) {
    const member = getProgressionMember(startNumber, i, step);
    progressionArr.push(member);
  }
  return progressionArr;
};


// get pair of question and correct answer
const getGamePair = () => {
  const startNumber = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 5);
  const length = 10;
  const progression = getProgression(length, startNumber, step);
  const indexFadeNumber = getRandomNumber(0, 9);
  const correctNumber = progression[indexFadeNumber];
  progression[indexFadeNumber] = '..';
  const stringProgression = progression.join(' ');
  return cons(stringProgression, String(correctNumber));
};
// start game
const startEvenGame = () => {
  const gameName = 'What number is missing in this progression?';
  runGame(gameName, getGamePair);
};

export default startEvenGame;
