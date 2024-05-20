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

export default function runCalcGame() {
  const name = getUserName();
  let operation = null;
  let correctAnswer = null;
  let numberA = null;
  let numberB = null;
  const operations = {'+':(()=> numberA+numberB)(),'-':(()=> numberA-numberB)(),'*':(()=> numberA*numberB)()};
  sayHelloUserName(name);
  typeTask('What is the result of the expression?');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    operation = Object.values(operations)[getRandomInt(3)];
    operations[operation]
    askQuestion(`Question: ${numberA} ${operation} ${numberB}`);
    checkAnswer(getUserAnswer(), correctAnswer.toString(), name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}
