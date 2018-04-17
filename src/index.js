import readlineSync from 'readline-sync';

const askUserName = () => {
    //спросим имя пользоваетля
    const userName = readlineSync.question('May I have your name? ');
    //выведем приветствие
    console.log(`Hello, ${userName}!`);
};

export default askUserName;