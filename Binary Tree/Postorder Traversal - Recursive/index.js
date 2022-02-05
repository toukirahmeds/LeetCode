/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const postorderTraverse = function (node, arr) {
  if (!node) {
    return arr;
  }
  postorderTraverse(node.left, arr);
  postorderTraverse(node.right, arr);
  arr.push(node.val);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  return postorderTraverse(root, []);
};

/**
 * Time Complexity = O(n), where n is the number of nodes in the binary tree.
 */
