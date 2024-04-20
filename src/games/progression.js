import { getRandomInt, getUserName, getUserAnswer, sayWrongAnswer, MAX_ATTEMPTS } from "../index.js";

export function progressionGame() {
  const PROGRESSION_MIN_LENGTH = 5;
  const PROGRESSION_MAX_LENGTH = 10;
  const progressionLength = getRandomInt(PROGRESSION_MAX_LENGTH) + PROGRESSION_MIN_LENGTH;
  const name = getUserName()
  let progression = null;
  let progressionStep = null;
  let correctAnswer = null;
  let answer = null;
  let hidenIndex = null;
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== MAX_ATTEMPTS) {
    progression = [0]
    progressionStep = getRandomInt(10);
    for (let i = 0; i <= progressionLength; i++) {
      progression.push(progression[i] + progressionStep);
    }
    hidenIndex = getRandomInt(progressionLength);
    correctAnswer = progression[hidenIndex];
    progression[hidenIndex] = `..`;
    console.log(`Question: ${progression}`);
    answer = getUserAnswer();
    // TODO не строго сравнение плохо
    if (answer == correctAnswer) {
      console.log('Correct');
      correctAnswerCount++;
    } else {
      sayWrongAnswer(answer, correctAnswer, name);
      correctAnswerCount = 0;
    };
  }
  console.log(`Congratulations, ${name}!`)
}