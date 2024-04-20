import readlineSync from 'readline-sync';

export function sayHello() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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

export function calcGame() {
  const name = readlineSync.question('May I have your name? ');
  const operations = ['+', '-', '*']
  let operation = null;
  let correctAnswer = null;
  let numberA = null;
  let numberB = null;
  let answer = null;
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let correctAnswerCount = 0;
  while (correctAnswerCount !== 3) {
    numberA = getRandomInt(100);
    numberB = getRandomInt(100);
    operation = operations[getRandomInt(3)]
    switch (operation) {
    case '+':
      correctAnswer = numberA + numberB;
      break
    case '-':
      correctAnswer = numberA - numberB;
      break
    case '*':
      correctAnswer = numberA * numberB;
      break
    }
    console.log(`Question: ${numberA} ${operation} ${numberB}`);
    answer = readlineSync.question('Your answer: ');
    if (answer == correctAnswer) {
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