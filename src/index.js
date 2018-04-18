import readlineSync from 'readline-sync';

const askUserName = () => {
  // ask user name
  const userName = readlineSync.question('May I have your name? ');
  // print greeting
  console.log(`Hello, ${userName}!`);
};

export default askUserName;
