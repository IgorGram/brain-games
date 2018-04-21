import readlineSync from 'readline-sync';

const runGame = (question) => {
  // greeting the gamer and ask the question of the game
  console.log('Welcome to the Brain Games!');
  console.log(`${question}\n`);
  // ask user name
  const userName = readlineSync.question('May I have your name? ');
  // print greeting
  console.log(`Hello, ${userName}!`);
};

export default runGame;
