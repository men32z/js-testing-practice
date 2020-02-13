const analyze = (array) => {
  return {
    average: array.reduce((t, n) => t + n)/array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length
  }
}

module.exports =  analyze;
// const object = analyze([1,8,3,4,2,6]);
//
// console.log(object);
