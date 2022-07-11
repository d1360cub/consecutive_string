function longestConsec(strarr, k) {
  let current = '';
  let maxLength = 0;
  let result = '';
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }

  for (let i = 0; i < strarr.length - 1; i++) {
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
    2
  )
);
