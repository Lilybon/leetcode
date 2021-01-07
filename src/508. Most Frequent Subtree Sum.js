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

export function findFrequentTreeSum(root) {
  const map = {},
    results = []
  let max = 0
  traverse(root)
  for (let sum in map) {
    if (map[sum] === max) results.push(+sum)
  }
  return results
  function traverse(node) {
    if (!node) return 0
    let leftTreeSum = traverse(node.left)
    let rightTreeSum = traverse(node.right)
    let sum = leftTreeSum + rightTreeSum + node.val
    map[sum] = (map[sum] || 0) + 1
    max = Math.max(max, map[sum])
    return sum
  }
}
