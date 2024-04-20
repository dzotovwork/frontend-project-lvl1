import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  sayWrongAnswer,
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
  let correctAnswer = null;
  let numberA = null;
  let numberB = null;
  let answer = null;
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    console.log(`Question: ${numberA} ${numberB}`);
    correctAnswer = getTheDivisor(numberA, numberB);
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
