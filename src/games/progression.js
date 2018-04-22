import { cons } from 'hexlet-pairs';
import runGame from '..';

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

const getRundomNumber = (min, max) => {
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};
// get pair of question and correct answer
const getGamePair = () => {
  const startNumber = getRundomNumber(0, 20);
  const step = getRundomNumber(1, 5);
  const length = 10;
  const progression = getProgression(length, startNumber, step);
  const indexFadeNumber = getRundomNumber(0, 9);
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
