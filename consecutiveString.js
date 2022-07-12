function longestConsec(strarr, k) {
  let current = '';
  let maxLength = 0;
  let result = '';
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }

  if (k === 1) {
    for (let i = 0; i < strarr.length; i++) {
      current = strarr[i];
      if (current.length > maxLength) {
        maxLength = current.length;
        result = current;
      }
    }
  }

  for (let i = 0; i <= strarr.length - k; i++) {
    current = strarr[i];
    for (let j = 0; j < k - 1; j++) {
      current += strarr[i + j + 1];
      if (current.length > maxLength) {
        maxLength = current.length;
        result = current;
      }
    }
  }
  return result;
}

console.log(
  longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
);

console.log(
  longestConsec(
    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],
    3
  )
);

console.log(
  longestConsec(
    [
      'ejjjjmmtthh',
      'zxxuueeg',
      'aanlljrrrxx',
      'dqqqaaabbb',
      'oocccffuucccjjjkkkjyyyeehh',
    ],
    1
  )
);
