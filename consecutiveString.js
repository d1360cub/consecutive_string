function longestConsec(strarr, k) {
  let current = '';
  let maxLength = 0;
  let result = '';
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }

  if (k === 1) {
    let result = strarr.reduce((acc, curr) =>
      acc.length >= curr.length ? acc : curr
    );
    return result;
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

module.exports = longestConsec;
