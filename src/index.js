import readlineSync from 'readline-sync';

const runGame = (gameName, getQuestionSection) => {
  // greeting the gamer and show the name of game(question)
  console.log('Welcome to the Brain Games!');
  console.log(`${gameName}\n`);
  // ask user name
  const userName = readlineSync.question('May I have your name? ');
  // print greeting
  console.log(`Hello, ${userName}!\n`);
  // ask question
  if (getQuestionSection) {
    getQuestionSection(3, userName);
  }
};

export default runGame;
