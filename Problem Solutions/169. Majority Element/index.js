/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const n = nums.length, mid = n / 2, occurDict = {};
    let current;
    for (let i = 0; i < n; i++) {
        current = nums[i];
        if (occurDict.hasOwnProperty(current)) {
            occurDict[current]++;
        } else {
            occurDict[current] = 1;
        }

        if (occurDict[current] > mid) {
            return current;
        }
    }
};


console.log(majorityElement([2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 1, 2, 2]));

/**
 * Time Complexity = O(n)
 * where n is the number of elements in array 'nums'.
 */
