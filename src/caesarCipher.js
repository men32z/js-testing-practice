const eachCipher = (string, matcher, alphabet, num) => {
  const str = string.split('').map((x, i) => ({ i, val: x }));
  const lowers = str.filter(x => x.val.match(matcher)).map(x => {
    const index = alphabet.findIndex(y => y === x.val);
    x.val = alphabet[(index + num) % 26];
    return x;
  });
  return lowers;
};

const cipher = (string, num) => {
  num = Math.abs(num);
  const abcLow = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const abcUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const lower = new RegExp(/[a-z]/);
  const upper = new RegExp(/[A-Z]/);

  const lowers = eachCipher(string, lower, abcLow, num);
  const uppers = eachCipher(string, upper, abcUp, num);

  const str = string.split('');

  lowers.forEach((x) => {
    str[x.i] = x.val;
  });

  uppers.forEach((x) => {
    str[x.i] = x.val;
  });

  return str.join('');
};


module.exports = cipher;
