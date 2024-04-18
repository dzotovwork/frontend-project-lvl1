import readlineSync from 'readline-sync';

export function sayHello() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function getRandomInt() {
  const MAX = 100;
  return Math.floor(Math.random() * MAX);
}

export function evenGame() {
  const name = readlineSync.question('May I have your name? ');
  let correctAnswer = null;
  let number = null;
  let answer = null;
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== 3) {
    number = getRandomInt();
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