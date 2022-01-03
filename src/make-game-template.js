import { MAX_ROUND } from './constants.js';
import makeGreeting from './make-greeting.js';

export default (executeGame, setDescriptionGame) => {
  const userName = makeGreeting();

  setDescriptionGame();

  const iter = (round) => {
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

        iter(round + 1);
    }
  };

  iter(1);
};
