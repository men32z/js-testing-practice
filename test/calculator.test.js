const calculator = require('../src/calculator');

test('Calculator adds 5 + 5 to equal 10', () => {
  expect(calculator.add(5 , 5)).toBe(10);
});

test('Calculator substracts 5 - 5 to equal 0', () => {
  expect(calculator.subtract(5 , 5)).toBe(0);
});

test('Calculator multiply 5 * 5 to equal 25', () => {
  expect(calculator.multiply(5 , 5)).toBe(25);
});

test('Calculator divide 5 / 5 to equal 1', () => {
  expect(calculator.divide(5 , 5)).toBe(1);
});
