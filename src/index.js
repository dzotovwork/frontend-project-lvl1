import readlineSync from 'readline-sync';

export const MAX_ATTEMPTS = 3;
export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getUserName() {
  return readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);
}

export function sayWrongAnswer(answer, correctAnswer, name) {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
    Let 's try again, ${name}!`)
}