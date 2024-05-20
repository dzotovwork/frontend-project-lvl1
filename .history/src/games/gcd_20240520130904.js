import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  checkAnswer,
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
export default function gcdGame() {
  const name = getUserName();
  let numberA = null;
  let numberB = null;
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    console.log(`Question: ${numberA} ${numberB}`);
    checkAnswer(getUserAnswer(), getTheDivisor(numberA, numberB).toString(), name);
    correctAnswerCount += 1;
  }
  console.log(`Congratulations, ${name}!`);
}
