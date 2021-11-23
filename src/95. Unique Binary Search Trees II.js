/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function generateTrees(n) {
  /**
   * Assuming Tree(n) returns all possible BST combinations,
   * we can infer that
   * Tree(n) =
   * Tree(0) * Tree(n - 1) +
   * Tree(1) * Tree(n - 2) +
   * ... +
   * Tree(n - 1) * Tree(0)
   */
  return n === 0 ? [] : collectTrees(1, n)
  function collectTrees(left, right) {
    if (left > right) return [null]
    const results = []
    for (let i = left; i <= right; i++) {
      const leftTrees = collectTrees(left, i - 1)
      const rightTrees = collectTrees(i + 1, right)
      for (let leftTree of leftTrees) {
        for (let rightTree of rightTrees) {
          const tree = new TreeNode(i, leftTree, rightTree)
          results.push(tree)
        }
      }
    }
    return results
  }
}
