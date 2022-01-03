import { MAX_ROUND } from './constants.js';
import makeGreeting from './make-greeting.js';

let round = 0;

export default (executeGame, setDescriptionGame) => {
  const userName = makeGreeting();

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
