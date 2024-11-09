const capitalize = require('./capitalize');

test('checks if first letter of a word is capitalised', () => {
  expect(capitalize("masina")).toBe("Masina");
});