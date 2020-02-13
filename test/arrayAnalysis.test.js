const analyze = require('../src/arrayAnalysis');

test('Array Analysis returns and object with Avg, min, Max and length ', () => {
  const analysis = analyze([1, 8, 3, 4, 2, 6]);
  expect(analysis.average).toBe(4);
  expect(analysis.max).toBe(8);
  expect(analysis.min).toBe(1);
  expect(analysis.length).toBe(6);
});
