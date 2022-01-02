import readlineSync from 'readline-sync';

let count = 0;

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function isCorrectAnswer(number, answer) {
  const isEven = number % 2 === 0;

  const expectedAnswer = isEven ? 'yes' : 'no';

  return answer === expectedAnswer;
}

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const startGame = () => {
  count += 1;

  const number = getRandomArbitrary(1, 500);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const isCorrect = isCorrectAnswer(number, userAnswer);

  if (isCorrect) {
    if (count === 3) {
      console.log('Congratulations!');

      return;
    }

    console.log('Correct!');

    startGame();

    return;
  }

  console.log(`'${userAnswer}' is wrong answer ;(.`);
};

startGame();
