import readlineSync from 'readline-sync';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function getUserName() {
  return readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);
}

export const MAX_ATTEMPTS = 3;