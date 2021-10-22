/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const preOrder = function (node, resultArr) {
    if (!node) {
        return resultArr;
    }

    resultArr.push(node.val);

    if (node.left) {
        resultArr = preOrder(node.left, resultArr);
    }

    if (node.right) {
        resultArr = preOrder(node.right, resultArr);
    }

    return resultArr;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    return preOrder(root, []);
};
