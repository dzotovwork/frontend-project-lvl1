import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  sayWrongAnswer,
  MAX_ATTEMPTS,
} from '../index.js';

export default function calcGame() {
  const name = getUserName();
  const operations = ['+', '-', '*'];
  let operation = null;
  let correctAnswer = null;
  let numberA = null;
  let numberB = null;
  let answer = null;
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
    answer = getUserAnswer();
    if (answer === correctAnswer.toString()) {
      console.log('Correct');
      correctAnswerCount += 1;
    } else {
      sayWrongAnswer(answer, correctAnswer, name);
      process.exit();
    }
  }
  console.log(`Congratulations, ${name}!`);
}
