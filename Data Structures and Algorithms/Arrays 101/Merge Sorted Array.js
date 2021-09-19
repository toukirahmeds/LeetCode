/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let resultLen = m, i = 0, j = 0;
    while (i < resultLen) {
        if (nums1[i] > nums2[j]) {
            for (let k = resultLen; k > i; k--) {
                nums1[k] = nums1[k - 1];
            }
            nums1[i] = nums2[j];
            j++;
            resultLen++;
        }
        i++;
    }

    while (i < m + n) {
        nums1[i] = nums2[j];
        i++;
        j++;
    }

};

console.log(merge([0], m = 0, [1], 1));
