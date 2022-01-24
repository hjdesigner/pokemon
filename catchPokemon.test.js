const catchPokemon = require('./catchPokemon');

test('Should return 1 if do not passed the coordinate', () => {
  expect(catchPokemon('')).toBe(1);
});
test('Should return 2 if passed the E coordinate', () => {
  expect(catchPokemon('E')).toBe(2);
});
test('Should return 2 if passed the EE coordinate', () => {
  expect(catchPokemon('EE')).toBe(2);
});
test('Should return 4 if passed the NESO coordinate', () => {
  expect(catchPokemon('NESO')).toBe(4);
});

test('Should return 2 if passed the NSNSNSNSNS coordinate', () => {
  expect(catchPokemon('NSNSNSNSNS')).toBe(2);
});
test('Should return 3 if passed the OSE coordinate', () => {
  expect(catchPokemon('OSE')).toBe(3);
});
test('Should return 2 if passed the OSS coordinate', () => {
  expect(catchPokemon('OSS')).toBe(2);
});