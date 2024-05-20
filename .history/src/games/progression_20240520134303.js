import {
  getRandomInt,
  getUserName,
  getUserAnswer,
  typeTask,
  sayHelloUserName,
  askQuestion,
  sayCongratulations,
  checkAnswer,
  MAX_ATTEMPTS,
} from '../index.js';

export default function runProgressionGame() {
  const PROGRESSION_MIN_LENGTH = 5;
  const PROGRESSION_MAX_LENGTH = 10;
  const progressionLength = getRandomInt(PROGRESSION_MAX_LENGTH) + PROGRESSION_MIN_LENGTH;
  const name = getUserName();
  let progression = null;
  let progressionStep = null;
  let correctAnswer = null;
  let hidenIndex = null;
  sayHelloUserName(name);
  typeTask('What number is missing in the progression?');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    progression = [0];
    progressionStep = getRandomInt(10);
    for (let i = 0; i <= progressionLength; i += 1) {
      progression.push(progression[i] + progressionStep);
    }
    hidenIndex = getRandomInt(progressionLength);
    correctAnswer = progression[hidenIndex];
    progression[hidenIndex] = '..';
    askQuestion(`Question: ${progression.join(' ')}`);
    checkAnswer(getUserAnswer(), correctAnswer.toString(), name);
    correctAnswerCount += 1;
  }
  sayCongratulations(name);
}
