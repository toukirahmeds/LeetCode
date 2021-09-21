/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let k = nums.length;
    for (let i = 0; i < k - 1;) {
        if (nums[i] === nums[i + 1]) {
            for (let j = i + 1; j < k - 1; j++) {
                nums[j] = nums[j + 1];
            }
            k--;
        } else {
            i++;
        }
    }

    return k;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
