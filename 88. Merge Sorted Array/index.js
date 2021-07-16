/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    let currentNum1, currentNum2, j = 0, newLength = m;
    for(let i = 0; i < n; i++) {
        currentNum2 = nums2[i];
        while(j < newLength) {
            currentNum1 = nums1[j];
            if(currentNum2 < currentNum1) {
                for(let k = newLength; k > j; k--) {
                    nums1[k] = nums1[k-1];
                }
                nums1[j] = currentNum2;
                newLength++;
                break;
            }
            j++;
        }
        
        if(j === newLength) {
            nums1[j] = currentNum2;
            newLength++;
        }
    }
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);

/**
 * Time Complexity = O(mn)
 */