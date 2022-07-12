const longestConsec = require('./consecutiveString');

describe('Consecutive String', function () {
  it('should return "" if strarr.length === 0', function () {
    expect(longestConsec('', 1)).toBe('');
  });

  it('should return "" if k > strarr.length', function () {
    expect(longestConsec('a', 2)).toBe('');
  });

  it('should return "" if k <= 0', function () {
    expect(longestConsec('a', -1)).toBe('');
  });

  it('should return a string, k = 1', function () {
    expect(longestConsec(['a'], 1)).toBe('a');
  });

  it('should return a string, k = 1', function () {
    expect(longestConsec(['one', 'two'], 1)).toBe('one');
  });

  it('should return a string, k = 1', function () {
    expect(longestConsec(['one', 'two', 'three'], 1)).toBe('three');
  });

  it('should return first longest consecutive concat, k = 2', function () {
    expect(
      longestConsec(['tree', 'foling', 'trashy', 'blue', 'abcdef', 'uvwxyz'], 2)
    ).toBe('folingtrashy');
  });

  it('should return first longest consecutive concat, k = 3', function () {
    expect(
      longestConsec(['one', 'two', 'three', 'four', 'five', 'six'], 3)
    ).toBe('threefourfive');
  });
});
