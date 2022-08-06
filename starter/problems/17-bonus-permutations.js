/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(arr) {
  let n;
  let res = [];
  n = arr.length;
  let used = Array(n);
  build(arr, [], used, res, n);
  return res;
}

function build(arr, list, used, res, n) {
  //bc
  if (list.length === n) {
    res.push(list);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!used[i]) {
      used[i] = true;
      build(arr, [...list, arr[i]], used, res, n);
      used[i] = false;
    }
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
