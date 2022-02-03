/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const inorderTraverse = function (node, arr) {
  if (!node) {
    return arr;
  }
  inorderTraverse(node.left, arr);
  arr.push(node.val);
  inorderTraverse(node.right, arr);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  return inorderTraverse(root, []);
};

/**
 * Time Complexity = O(n), where n is the number of nodes in the binary tree.
 */
