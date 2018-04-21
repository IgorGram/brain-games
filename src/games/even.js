// // greeting func
// import readlineSync from 'readline-sync';
//
// let userName;
// let randomNumber;
// let userAnswer;
// let correctAnswer;
// const greeting = () => {
//   console.log('Welcome to the Brain Games!');
//   console.log('Answer "yes" if number even otherwise answer "no".\n');
// };
//
//
// const getName = () => {
//   // ask user name
//   userName = readlineSync.question('May I have your name? ');
//   // print greeting
//   console.log(`Hello, ${userName}!\n`);
// };
//
// // get random number in range
// const getRandomNumber = (min, max) => {
//   randomNumber = min + (Math.random() * ((max + 1) - min));
//   randomNumber = Math.floor(randomNumber);
//   return randomNumber;
// };
//
// // question
// const question = () => {
//   console.log(`Question: ${getRandomNumber(1, 20)}`);
// };
//
// // getCorrectAnswer
// const gerCorrectAnswer = () => {
//   correctAnswer = randomNumber % 2 ? 'no' : 'yes';
// };
//
// // wrongAnswer
// const wrongAnswer = () => {
//   console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//   console.log(`Let's try again, ${userName}`);
// };
//
// // userAnswer
// const getUserAnswer = () => {
//   userAnswer = readlineSync.question('Your answer: ');
// };
//
// // isCorrectTypeAnswer
// const isCorrectTypeAnswer = () => userAnswer !== 'yes' || userAnswer !== 'no';
//
// // questionMode
// const questionMode = (counter) => {
//   if (counter === 0) {
//     console.log(`Congratulations, ${userName}`);
//     return;
//   }
//   question();
//   gerCorrectAnswer();
//   getUserAnswer();
//   if (!isCorrectTypeAnswer()) {
//     wrongAnswer();
//     return;
//   }
//   if (userAnswer === correctAnswer) {
//     console.log('Correct!');
//   } else {
//     wrongAnswer();
//     return;
//   }
//   questionMode(counter - 1);
// };
//
// // summary func evenGame
// const evenGame = (counter) => {
//   greeting();
//   getName();
//   questionMode(counter);
// };
//
// export default evenGame;
