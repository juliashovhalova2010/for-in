import sortProp from '../app';

const unsortCharacter = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

const uncorrectRightSortCharacter1 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'health', value: 10 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
];

const rightSortCharacter1 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const reverseSortCharacter1 = [
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const rightSortCharacter2 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const reverseSortCharacter2 = [
  { key: 'attack', value: 80 },
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
  { key: 'defence', value: 40 },
  { key: 'health', value: 10 },
];

const rightSortCharacter3 = [
  { key: 'name', value: 'мечник' },
  { key: 'level', value: 2 },
  { key: 'attack', value: 80 },
  { key: 'health', value: 10 },
  { key: 'defence', value: 40 },
];

const reverseSortCharacter3 = [
  { key: 'health', value: 10 },
  { key: 'attack', value: 80 },
  { key: 'level', value: 2 },
  { key: 'name', value: 'мечник' },
  { key: 'defence', value: 40 },
];

const rightSpecOrder1 = ['name', 'level'];
const reverseSpecOrder1 = ['level', 'name'];
const rightSpecOrder2 = ['name', 'level', 'attack'];
const reverseSpecOrder2 = ['attack', 'level', 'name'];
const rightSpecOrder3 = ['name', 'level', 'attack', 'health'];
const reverseSpecOrder3 = ['health', 'attack', 'level', 'name'];

test.each([
  [rightSortCharacter1, rightSpecOrder1],
  [reverseSortCharacter1, reverseSpecOrder1],
  [rightSortCharacter2, rightSpecOrder2],
  [reverseSortCharacter2, reverseSpecOrder2],
  [rightSortCharacter3, rightSpecOrder3],
  [reverseSortCharacter3, reverseSpecOrder3],
])(('Test №%#: check sorted object: %o, order: %p'),
  (sortCharacter, order) => expect(sortCharacter).toEqual(sortProp(unsortCharacter, order)));

test('sorting unsort character not to equal uncorrect sort character', () => {
  expect(uncorrectRightSortCharacter1).not.toEqual(sortProp(unsortCharacter, rightSpecOrder1));
});
