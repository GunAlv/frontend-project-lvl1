import readlineSync from 'readline-sync';
import makeGameTemplate from '../make-game-template.js';
import { getRandomInteger } from '../utils.js';
import { NUMBER_RANGE } from '../constants.js';

const ANSWER_TYPE = {
  YES: 'yes',
  NO: 'no',
};

function setDescriptionGame() {
  console.log(`Answer "${ANSWER_TYPE.YES}" if the number is even, otherwise answer "${ANSWER_TYPE.NO}".`);
}

const startGame = () => {
  const number = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);

  console.log(`Question: ${number}`);

  const userAnswer = readlineSync.question('Your answer: ');
  const expectedAnswer = number % 2 === 0 ? ANSWER_TYPE.YES : ANSWER_TYPE.NO;

  return { userAnswer, expectedAnswer };
};

export default () => makeGameTemplate(startGame, setDescriptionGame);
