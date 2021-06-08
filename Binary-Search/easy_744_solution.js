/**
 * https://leetcode.com/problems/peak-index-in-a-mountain-array/
 *
 * 744. Find Smallest Letter Greater Than Target
 *
 * Easy
 *
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    // 如果数列里的最大的字母都比对象字母小的情况下，返回第二次循环的第一个字母
     if(letters[max - 1] <= target) {
      return letters[0];
   }

  const last = binarySearch(letters, 0, max -1, target);
  return letters[last]
};

function binarySearch(array, first, last, target) {
  while (first < last) {
      const mid = Math.floor(first + (last - first)/2)
      if (target < array[mid]) {
          last = mid
      } else {
          first = mid + 1
      }
  }

  return last
}

