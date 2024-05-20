import readlineSync from 'readline-sync';

export const MAX_ATTEMPTS = 3;
export const CALC_TASK_TEXT = 'What is the result of the expression?';
export const EVEN_TASK_TEXT = 'Answer "yes" if the number is even, otherwise answer "no".';
export const GCD_TASK_TEXT = 'Find the greatest common divisor of given numbers.';
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getUserName() {
  return readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);
}

export function sayHelloUserName(userName) {
  console.log(`Hello, ${userName}!`);
}

export function typeTask(task) {
  console.log(task);
}

export function askQuestion(question) {
  console.log(question);
}

export function sayCongratulations(userName) {
  console.log(`Congratulations, ${userName}!`);
}

export function getUserAnswer() {
  return readlineSync.question('Your answer: ');
}

function sayWrongAnswer(answer, correctAnswer, name) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
}
export function checkAnswer(answer, correctAnswer, name) {
  if (answer === correctAnswer) {
    console.log('Correct');
  } else {
    sayWrongAnswer(answer, correctAnswer, name);
    process.exit();
  }
}
