/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const getInorderTraversed = function (node, resultArr) {
    if (node.left) {
        resultArr = getInorderTraversed(node.left, resultArr);
    }

    resultArr.push(node.val);

    if (node.right) {
        resultArr = getInorderTraversed(node.right, resultArr);
    }

    return resultArr;
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    if (!root) {
        return []
    }
    return getInorderTraversed(root, []);
};
