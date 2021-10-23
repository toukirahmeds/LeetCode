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
var preorderTraversal = function (root) {
    const result = [], stack = [], visited = [];
    let node = root;
    while (node) {
        if (visited.indexOf(node) < 0) {
            result.push(node.val);
            visited.push(node);
            stack.push(node);
        }

        if (node.left && visited.indexOf(node.left) < 0) {
            node = node.left;
        } else if (node.right && visited.indexOf(node.right) < 0) {
            node = node.right;
        } else {
            node = stack.pop();
        }
    }
    return result;
};
