/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let k = nums.length;
    for (let i = 0; i < k;) {
        if (nums[i] === val) {
            if (i === k - 1) {
                k--;
            } else {
                for (let j = i + 1; j < k; j++) {
                    nums[j - 1] = nums[j];
                }
                k--;
            }
        } else {
            i++;
        }
    }
    return k;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
