import readlineSync from 'readline-sync';
import makeGameTemplate from '../make-game-template.js';
import { getRandomInteger } from '../utils.js';
import { NUMBER_RANGE, ANSWER_TYPE } from '../constants.js';

function setDescriptionGame() {
  console.log(`Answer "${ANSWER_TYPE.YES}" if given number is prime. Otherwise answer "${ANSWER_TYPE.NO}".`);
}

function isNumberPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

const startGame = () => {
  const number = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

  console.log((`Question: ${number}`));

  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = isNumberPrime(number) ? ANSWER_TYPE.YES : ANSWER_TYPE.NO;

  return { userAnswer, expectedAnswer };
};

export default () => makeGameTemplate(startGame, setDescriptionGame);
