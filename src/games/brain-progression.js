import readlineSync from 'readline-sync';
import makeGameTemplate from '../make-game-template.js';
import { getRandomInteger } from '../utils.js';
import { NUMBER_RANGE } from '../constants.js';

const PROGRESSION_LIMIT = {
  MIN: 5,
  MAX: 11,
};

function setDescriptionGame() {
  console.log('What number is missing in the progression?');
}

function createProgressionArray(length, range) {
  const result = [];

  for (let i = 0; i < length; i += 1) {
    const number = result[result.length - 1] || 0;
    result.push(number + range);
  }

  return result;
}

const startGame = () => {
  const range = getRandomInteger(NUMBER_RANGE.MIN, NUMBER_RANGE.MAX);
  const progressionLength = getRandomInteger(PROGRESSION_LIMIT.MIN, PROGRESSION_LIMIT.MAX);
  const emptyIndex = getRandomInteger(0, progressionLength);
  const progressionArray = createProgressionArray(progressionLength, range);

  const expectedAnswer = progressionArray[emptyIndex].toString();

  const progressionString = progressionArray.join(' ').replace(expectedAnswer, '..');

  console.log(`Question: ${progressionString}`);

  const userAnswer = readlineSync.question('Your answer: ');

  return { userAnswer, expectedAnswer };
};

export default () => makeGameTemplate(startGame, setDescriptionGame);
