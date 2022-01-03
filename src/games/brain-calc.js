import readlineSync from 'readline-sync';
import { getRandomInteger } from '../utils.js';
import { NUMBER_RANGE, MAX_ROUND } from '../constants.js';

let round = 0;
const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
};

function getExpressionResult(number1, number2, operator) {
  switch (operator) {
    case OPERATORS.PLUS:
      return number1 + number2;
    case OPERATORS.MINUS:
      return number1 - number2;
    case OPERATORS.MULTIPLY:
      return number1 * number2;
    default:
      throw new Error(`${operator} is not correct`);
  }
}

console.log('Welcome to the Brain Game!');
const userName = readlineSync.question('May I have your name? ');

console.log('What is result of expression?');

const startGame = () => {
  round += 1;

  const number1 = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const number2 = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const operatorList = Object.values(OPERATORS);
  const operator = operatorList[getRandomInteger(0, operatorList.length - 1)];

  console.log(`Question: ${number1} ${operator} ${number2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = getExpressionResult(number1, number2, operator).toString();

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

      startGame();
  }
};

export default startGame;
