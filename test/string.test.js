import capitalize from '../src/string';

test('Capitalize the first character of hello to be equal to Hello', () => {
  expect(capitalize('hello')).toBe('Hello');
});
