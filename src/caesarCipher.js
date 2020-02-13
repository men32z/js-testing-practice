const eachCipher = (string, matcher, alphabet, num) => {
  let str = string.split('').map((x, i)=>({i:i, val: x}))
  let lowers = str.filter(x => x.val.match(matcher)).map(x => {
    let index = alphabet.findIndex(y => y === x.val);
    x.val = alphabet[(index + num) % 26]
    return x;
  });
  return lowers;
}

const cipher = (string, num) => {
  num = Math.abs(num);
  let abcLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let abcUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const lower = new RegExp(/[a-z]/);
  const upper = new RegExp(/[A-Z]/);

  let lowers = eachCipher(string, lower, abcLow, num);
  let uppers = eachCipher(string, upper, abcUp, num);

  let str = string.split('');

  lowers.forEach((x) => {
    str[x.i] = x.val;
  });

  uppers.forEach((x) => {
    str[x.i] = x.val;
  });

  return str.join('');
};


module.exports =  cipher;
