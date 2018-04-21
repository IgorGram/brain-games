import readlineSync from 'readline-sync';
import runGame from '..';

let randomNumber;
let userAnswer;
let correctAnswer;

// get random number in range
const getRandomNumber = (min, max) => {
  randomNumber = min + (Math.random() * ((max + 1) - min));
  randomNumber = Math.floor(randomNumber);
  return randomNumber;
};

// question
const question = () => {
  console.log(`Question: ${getRandomNumber(1, 20)}`);
};

// getCorrectAnswer
const gerCorrectAnswer = () => {
  correctAnswer = randomNumber % 2 ? 'no' : 'yes';
};

// wrongAnswer
const wrongAnswer = (userName) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}`);
};

// userAnswer
const getUserAnswer = () => {
  userAnswer = readlineSync.question('Your answer: ');
};

// isCorrectTypeAnswer
const isCorrectTypeAnswer = () => userAnswer !== 'yes' || userAnswer !== 'no';

// getQuestionSection
const getQuestionSection = (counter, userName) => {
  if (counter === 0) {
    console.log(`Congratulations, ${userName}`);
    return;
  }
  question();
  gerCorrectAnswer();
  getUserAnswer();
  if (!isCorrectTypeAnswer()) {
    wrongAnswer(userName);
    return;
  }
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
  } else {
    wrongAnswer(userName);
    return;
  }
  getQuestionSection(counter - 1);
};

// summary func evenGame
const startEvenGame = () => {
  const gameName = 'Answer "yes" if number even otherwise answer "no".';
  runGame(gameName, getQuestionSection);
};

export default startEvenGame;
