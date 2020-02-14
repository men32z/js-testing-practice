import cipher from '../src/caesarCipher';

test('Caesar Cipher wrapping from a to e with a 4 as a parameter', () => {
  expect(cipher('a', 4)).toBe('e');
});

test('Caesar Cipher wrapping from z to a', () => {
  expect(cipher('z', 1)).toBe('a');
});

test('Caesar Cipher keeps the same case.', () => {
  expect(cipher('ABCDabcd', 1)).toBe('BCDEbcde');
});

test('Caesar Cipher keeps the punctuation.', () => {
  expect(cipher('ABCD.-a bcd', 1)).toBe('BCDE.-b cde');
});