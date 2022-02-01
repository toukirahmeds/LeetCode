/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const preorderTraverse = function (node, arr) {
  if (!node) {
    return arr;
  }
  arr.push(node.val);
  preorderTraverse(node.left, arr);
  preorderTraverse(node.right, arr);
  return arr;
};

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  return preorderTraverse(root, []);
};

/**
 * Time Complexity = O(n), where n is the number of node in the binary tree
 */
