import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  checkAnswer,
  MAX_ATTEMPTS,
} from '../index.js';

export default function runEvenGame() {
  const name = getUserName();
  let number = null;
  sayHelloUserName(name);
  typeTask('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    number = getRandomInt(100);
    askQuestion(`Question: ${number}`);
    checkAnswer(getUserAnswer(), number % 2 === 0 ? 'yes' : 'no', name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}