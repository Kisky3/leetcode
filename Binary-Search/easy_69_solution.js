/**
 * https://leetcode.com/problems/sqrtx/
 *
 * 69. Sqrt(x)
 *
 * Easy
 *
 * Runtime: 144 ms, faster than 5.03% of JavaScript online submissions for Peak Index in a Mountain Array.
 * Memory Usage: 39 MB, less than 93.74% of JavaScript online submissions for Peak Index in a Mountain Array.
 */

 /**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return binarySearch(x);
};

function binarySearch(number) {
  let mid = Math.round((1 + number) /2);
  while(mid * mid > number) {
    if ((mid - 1)*(mid - 1) < number) {
      return mid - 1
    }
    if((mid - 1)*(mid - 1) === number) {
      return mid - 1
    }
    mid = Math.round((1 + mid) /2);
  }
  return mid
}