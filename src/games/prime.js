import { getRandomInt, getUserName, getUserAnswer, sayWrongAnswer, MAX_ATTEMPTS } from "../index.js";

function isprime(n) {

}

export function primeGame() {
  const name = getUserName();
  let correctAnswer = null;
  let number = null;
  let answer = null;
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    // +1 что б не попасть на 0
    number = getRandomInt(100) + 1;
    correctAnswer = (() => {
      if (number == 1) // 1 - не простое число
        return 'no';
      // перебираем возможные делители от 2 до sqrt(n)
      for (let d = 2; d * d <= number; d++) {
        // если разделилось нацело, то составное
        if (number % d == 0)
          return 'no';
      }
      // если нет нетривиальных делителей, то простое
      return 'yes';
    })();
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