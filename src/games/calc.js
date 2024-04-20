import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  checkAnswer,
  MAX_ATTEMPTS,
} from '../index.js';

export default function calcGame() {
  const name = getUserName();
  const operations = ['+', '-', '*'];
  let operation = null;
  let correctAnswer = null;
  let numberA = null;
  let numberB = null;
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    operation = operations[getRandomInt(3)];
    switch (operation) {
      case '+':
        correctAnswer = numberA + numberB;
        break;
      case '-':
        correctAnswer = numberA - numberB;
        break;
      default:
        correctAnswer = numberA * numberB;
        break;
    }
    console.log(`Question: ${numberA} ${operation} ${numberB}`);
    checkAnswer(getUserAnswer(), correctAnswer, name);
    correctAnswerCount += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
