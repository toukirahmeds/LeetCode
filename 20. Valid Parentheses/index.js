/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    const stack = [], len = s.length;
    let stackTopItem;
    for(let i = 0; i < len; i++) {
        stackTopItem = stack[stack.length - 1];
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (
            s[i] === ")" && stackTopItem === "(" ||
            s[i] === "}" && stackTopItem === "{" ||
            s[i] === "]" && stackTopItem === "["
        ){
            stack.pop();
        } else {
            return false;
        }
    }
    return stack.length === 0;
};

console.log(isValid("{[]}"));

/**
 * Time Complexity = O(n)
 */