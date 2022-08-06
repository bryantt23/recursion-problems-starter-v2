/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/

// your code here
function isSorted(nums) {
  return helper(nums, 1, nums.length);
}

function helper(nums, pos, length) {
  //bc
  if (pos === length) {
    return true;
  }

  if (nums[pos - 1] > nums[pos]) {
    return false;
  }

  return helper(nums, pos + 1, length);
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
