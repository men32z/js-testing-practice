const analyze = (array) => ({
  average: array.reduce((t, n) => t + n) / array.length,
  min: Math.min(...array),
  max: Math.max(...array),
  length: array.length,
});

export default analyze;