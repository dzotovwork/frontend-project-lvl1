import {
  getUserName,
  getUserAnswer,
  sayCongratulations,
  askQuestion,
  sayHelloUserName,
  typeTask,
  checkAnswer,
  MAX_ATTEMPTS,
} from '../index.js';

import {getRandomInt} from '../utils.js'
export default function runEvenGame() {
  const name = getUserName();
  let number = null;
  sayHelloUserName(name);
  typeTask(EVEN_TASK_TEXT);
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    number = getRandomInt(100);
    askQuestion(`Question: ${number}`);
    checkAnswer(getUserAnswer(), number % 2 === 0 ? 'yes' : 'no', name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}
