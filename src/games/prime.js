import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  checkAnswer,
  MAX_ATTEMPTS,
  sayHelloUserName,
  typeTask,
  askQuestion,
  sayCongratulations,
} from '../index.js';

function isPrime(number) {
  // 1 - не простое число
  if (number === 1) {
    return 'no';
  }
  // перебираем возможные делители от 2 до sqrt(n)
  for (let d = 2; d * d <= number; d += 1) {
    // если разделилось нацело, то составное
    if (number % d === 0) return 'no';
  }
  // если нет нетривиальных делителей, то простое
  return 'yes';
}
export default function runPrimeGame() {
  const name = getUserName();
  let number = null;
  sayHelloUserName(name);
  typeTask('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    // +1 что б не попасть на 0
    number = getRandomInt(100) + 1;
    askQuestion(`Question: ${number}`);
    checkAnswer(getUserAnswer(), isPrime(number), name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}
