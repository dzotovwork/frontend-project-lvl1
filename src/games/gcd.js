import { getRandomInt, getUserName, getUserAnswer, sayWrongAnswer, MAX_ATTEMPTS } from "../index.js";

export function gcdGame() {
  const name = getUserName()
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
    correctAnswer = (() => {
      // TODO цикл в цикле - плохо
      // TODO мутировать плохо
      while (numberA !== 0 && numberB !== 0) {
        if (numberA > numberB) numberA = numberA % numberB
        else numberB = numberB % numberA;
      }
      return numberA + numberB;
    })();
    answer = getUserAnswer();
    // TODO не строго сравнение плохо
    if (answer == correctAnswer) {
      console.log('Correct');
      correctAnswerCount++;
    } else {
      sayWrongAnswer(answer, correctAnswer, name);
      correctAnswerCount = 0;
    };
  }
  console.log(`Congratulations, ${name}!`)
}