import readlineSync from 'readline-sync';
import makeGameTemplate from '../make-game-template.js';
import { getRandomInteger } from '../utils.js';
import { NUMBER_RANGE } from '../constants.js';

function setDescriptionGame() {
  console.log('Find the greatest common divisor of given numbers.');
}

function getGCDResult(number1, number2) {
  return number2 ? getGCDResult(number2, number1 % number2) : Math.abs(number1);
}

const startGame = () => {
  const number1 = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const number2 = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

  console.log(`Question: ${number1} ${number2}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = getGCDResult(number1, number2).toString();

  return { userAnswer, expectedAnswer };
};

export default () => makeGameTemplate(startGame, setDescriptionGame);
