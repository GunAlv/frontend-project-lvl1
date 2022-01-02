import readlineSync from 'readline-sync';

let count = 0;

const MAX_COUNT = 3;

const NUMBER_RANGE = {
  MIN: 1,
  MAX: 500,
};

const ANSWER_TYPE = {
  YES: 'yes',
  NO: 'no',
};

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(`Answer "${ANSWER_TYPE.YES}" if the number is even, otherwise answer "${ANSWER_TYPE.NO}".`);

const startGame = () => {
  count += 1;

  const number = getRandomArbitrary(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

  console.log(`Question: ${number}`);
  const userAnswer = readlineSync.question('Your answer: ');

  const expectedAnswer = number % 2 === 0 ? ANSWER_TYPE.YES : ANSWER_TYPE.NO;

  const isCorrect = userAnswer === expectedAnswer;

  switch (true) {
    case !isCorrect:
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`,
        '\n',
        "Let's try again!",
      );

      break;

    case count === MAX_COUNT:
      console.log('Congratulations!');

      break;

    default:
      console.log('Correct!');

      startGame();
  }
};

export default startGame;
