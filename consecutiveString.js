function longestConsec(strarr, k) {
  if (strarr.length === 0 || k > strarr.length || k <= 0) {
    return '';
  }
  return 'initialCommit';
}

console.log(
  longestConsec(
    ['zone', 'abigail', 'theta', 'form', 'libe', 'zas', 'theta', 'abigail'],
    2
  )
);
