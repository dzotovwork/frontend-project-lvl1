import {
  getRandomInt,
  getUserName,
  sayCongratulations,
  typeTask,
  askQuestion,
  getUserAnswer,
  checkAnswer,
  MAX_ATTEMPTS,
  sayHelloUserName,
} from '../index.js';

function calculate(operation, a, b) {
  return Object.values({ '+': (() => a + b)(), '-': (() => a - b)(), '*': (() => a * b)() })[operation];
}

function getOperation(index) {
  return ['+', '-', '*'][index];
}

export default function runCalcGame() {
  const name = getUserName();
  let operation = null;
  const correctAnswer = null;
  let numberA = null;
  let numberB = null;
  sayHelloUserName(name);
  typeTask('What is the result of the expression?');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    operation = getOperation(getRandomInt(3));
    correctAnswer = calculate(calculate(operation, numberA, numberB));
    askQuestion(`Question: ${numberA} ${operation} ${numberB}`);
    checkAnswer(getUserAnswer(), correctAnswer.toString(), name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}