import { getRandomInt, getUserName, getUserAnswer, sayWrongAnswer, MAX_ATTEMPTS } from "../index.js";

export function evenGame() {
  const name = getUserName();
  let correctAnswer = null;
  let number = null;
  let answer = null;
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    number = getRandomInt(100);
    correctAnswer = number % 2 == 0 ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    answer = getUserAnswer();
    if (answer === correctAnswer) {
      console.log('Correct');
      correctAnswerCount++;
    } else {
      sayWrongAnswer(answer, correctAnswer, name);
      correctAnswerCount = 0
    };
  }
  console.log(`Congratulations, ${name}!`)
}