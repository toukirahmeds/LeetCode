/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const resultArr = [], visited = [], stack = [];
    let node = root;

    while (node) {
        if (visited.indexOf(node) < 0) {
            visited.push(node);
            stack.push(node);
        }

        if (node.left && visited.indexOf(node.left) < 0) {
            node = node.left;
        } else if (node.right && visited.indexOf(node.right) < 0) {
            resultArr.push(node.val);
            stack.pop();
            node = node.right;
        } else {
            resultArr.push(node.val);
            stack.pop();
            node = stack.pop();
        }
    }
    return resultArr;
};
