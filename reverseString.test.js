const reverseString = require('./reverseString');

test('checks if a word is reversed correctly', () => {
  expect(reverseString("masina")).toBe("anisam");
});

test("checks if a palindrome is being reversed correctly", () => {
  expect(reverseString("racecar")).toBe("racecar");
})