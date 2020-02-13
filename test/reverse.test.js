const reverse = require('../src/reverse');

test('Reverse the string Hello to be equal to olleH', () => {
  expect(reverse('Hello')).toBe('olleH');
});
