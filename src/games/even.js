import { getRandomInt, getUserName, MAX_ATTEMPTS } from "..";

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
    answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct');
      correctAnswerCount++;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let 's try again, ${name}!`)
      correctAnswerCount = 0
    };
  }
  console.log(`Congratulations, ${name}!`)
}