import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  checkAnswer,
  sayHelloUserName,
  typeTask,
  askQuestion,
  sayCongratulations,
  MAX_ATTEMPTS,
} from '../index.js';

function getTheDivisor(first, seccond) {
  let a = first;
  let b = seccond;
  while (a !== 0 && b !== 0) {
    if (a > b) a %= b;
    else b %= a;
  }
  return a + b;
}
export default function runGcdGame() {
  const name = getUserName();
  let numberA = null;
  let numberB = null;
  sayHelloUserName(name);
  typeTask('Find the greatest common divisor of given numbers.');

  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    askQuestion(`Question: ${numberA} ${numberB}`);
    checkAnswer(getUserAnswer(), getTheDivisor(numberA, numberB).toString(), name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}
