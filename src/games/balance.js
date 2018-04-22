import { cons } from 'hexlet-pairs';
import runGame from '..';

const balanceNumber = (num) => {
  const arr = String(num).split('');
  // set all string in arr to number
  const newArr = [];
  arr.forEach((item) => {
    newArr.push(Number(item));
  });
  let maxNumber = Math.max(...newArr);
  let minNumber = Math.min(...newArr);
  if (maxNumber - minNumber <= 1) {
    newArr.sort();
    return newArr.join('');
  }
  const indexMaxNumber = arr.indexOf(String(maxNumber));
  const indexMinNumber = arr.indexOf(String(minNumber));
  while (maxNumber - minNumber > 1) {
    maxNumber -= 1;
    minNumber += 1;
  }
  newArr[indexMaxNumber] = maxNumber;
  newArr[indexMinNumber] = minNumber;
  newArr.sort();
  const str = newArr.join('');
  return balanceNumber(str);
};
// get pair of question and correct answer
const getGamePair = () => {
  const min = 1;
  const max = 1000;
  let randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  const correctAnswer = balanceNumber(randomNumber);
  return cons(randomNumber, correctAnswer);
};
// start game
const startBalanceGame = () => {
  const gameName = 'Balance the given number.';
  runGame(gameName, getGamePair);
};

export default startBalanceGame;
