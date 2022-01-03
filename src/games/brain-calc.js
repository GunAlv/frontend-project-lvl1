import readlineSync from 'readline-sync';
import makeGameTemplate from '../make-game-template.js';
import { getRandomInteger } from '../utils.js';
import { NUMBER_RANGE } from '../constants.js';

const OPERATORS = {
  PLUS: '+',
  MINUS: '-',
  MULTIPLY: '*',
};

function setDescriptionGame() {
  console.log('What is result of expression?');
}

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

const startGame = () => {
  const number1 = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const number2 = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const operatorList = Object.values(OPERATORS);
  const operator = operatorList[getRandomInteger(0, operatorList.length)];

  console.log(`Question: ${number1} ${operator} ${number2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = getExpressionResult(number1, number2, operator).toString();

  return { userAnswer, expectedAnswer };
};

export default () => makeGameTemplate(startGame, setDescriptionGame);
