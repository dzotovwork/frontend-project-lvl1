import {
  getUserName,
  sayCongratulations,
  typeTask,
  askQuestion,
  getUserAnswer,
  checkAnswer,
  MAX_ATTEMPTS,
  CALC_TASK_TEXT,
  sayHelloUserName,
} from '../index.js';
import getRandomInt from '../utils.js';

function calculate(operation, a, b) {
  return Object.values({ '+': (() => a + b)(), '-': (() => a - b)(), '*': (() => a * b)() })[operation];
}

function getOperation(index) {
  return ['+', '-', '*'][index];
}

export default function runCalcGame() {
  const name = getUserName();
  let correctAnswer = null;
  let operation = null;
  let numberA = null;
  let numberB = null;
  sayHelloUserName(name);
  typeTask(CALC_TASK_TEXT);
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
