/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let intStringArr = x.toString().split("");
    if(intStringArr[0] === "-") {
        intStringArr = ["-"].concat(intStringArr.slice(1).reverse());
    } else {
        intStringArr = intStringArr.reverse();
    }
    let result = parseInt(intStringArr.join(""));
    return result > (2**31 - 1) || result < (-1 * 2**31) ? 0 : result;
};

console.log(reverse(1534236469));

/**
 * Time Complexity = O(1)
 */
