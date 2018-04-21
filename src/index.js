import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';


const runGame = (description, getQuestionPair) => {
  let count = 3;
  // greeting the gamer and show the name of game(question)
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  // ask user name
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  //
  if (!getQuestionPair) {
    return;
  }
  // 3 round of game
  while (count > 0) {
    const pair = getQuestionPair();
    const question = car(pair);
    const correctAnswer = cdr(pair);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');
    count -= 1;
  }
  console.log(`Congratulations, ${userName}`);
};

export default runGame;
