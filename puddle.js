/**
 * Twitter Puddle
 *  implementation in functional style with regexp with zero-dependencies
 *
 * @note  There is UI-optimized version.
 *        For performance-optimized version see here:
 *
 *        https://gist.github.com/mkozakov/59af0fd5bddbed1a0399
 *        http://www.businessinsider.com/twitter-job-interview-question-rainfall-walls-2013-12
 *        https://programmingpraxis.com/2013/11/15/twitter-puddle/
 *        http://chrisdone.com/posts/twitter-problem-loeb
 *        http://puzzles.bostonpython.com/puddle.html
 *
 * @run    node puddle.js
 * @author Georgy Bunin
 */

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

function getRange(len) {
  return Array.apply(undefined, {length: len}).map(Number.call, Number);
}

function MarkWater(s) {
  return s.replace(/1(.{1,}0)1/gi, function (n) {
    return n.replace(/0/g, 'W');
  })
}

function puddle(numbers) {
  return getRange(getMaxOfArray(numbers)).map(function (level) {
    return MarkWater(numbers.map(function (n) {
      return +(n - level > 0);
    }).join(''));
  }).reverse();
}

// ----------------------------------------------------------------------------
[
  [2, 5, 1, 2, 3, 4, 7, 7, 6],
  [2, 5, 1, 2, 3, 4, 7, 7, 6, 2, 7, 1, 2, 3, 4, 5, 5, 4],
  [2, 7, 2, 7, 4, 7, 1, 7, 3, 7],
  [2, 5, 1, 3, 1, 2, 1, 7, 7, 6, 5, 9, 0, 1, 0, 0, 20, 18, 5, 20, 0, 1, 0, 1]
].map(function (a) {
  console.log(puddle(a).join('\n'), '\n');
});
// ----------------------------------------------------------------------------