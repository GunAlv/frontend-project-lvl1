import readlineSync from 'readline-sync';
import { MAX_ROUND } from './constants.js';

let round = 0;

export default (executeGame, setDescriptionGame) => {
  console.log('Welcome to the Brain Game!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);

  setDescriptionGame();

  const iter = () => {
    round += 1;

    const { userAnswer, expectedAnswer } = executeGame();

    const isCorrect = userAnswer === expectedAnswer;

    switch (true) {
      case !isCorrect:
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'`,
          '\n',
          `Let's try again, ${userName}!`,
        );

        break;

      case round === MAX_ROUND:
        console.log(`Congratulations, ${userName}!`);

        break;

      default:
        console.log('Correct!');

        iter();
    }
  };

  iter();
};
