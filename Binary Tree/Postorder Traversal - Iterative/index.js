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
var postorderTraversal = function (root) {
  const result = [],
    visited = [],
    stack = [];
  while (root) {
    if (!visited.includes(root)) {
      visited.push(root);
      stack.push(root);
    }

    if (root.left && !visited.includes(root.left)) {
      root = root.left;
    } else if (root.right && !visited.includes(root.right)) {
      root = root.right;
    } else {
      result.push(root.val);
      stack.pop();
      root = stack[stack.length - 1];
    }
  }

  return result;
};

/**
 * Time Complexity = O(n), where n is the number of nodes in the binary tree.
 */
