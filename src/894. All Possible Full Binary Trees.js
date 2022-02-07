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

function allPossibleFBT(n) {
  const memo = {}
  return collectFBT(n)
  function collectFBT(n) {
    const results = []
    if (memo[n]) return memo[n]
    if (n % 2 === 0) return results
    if (n === 1) {
      results.push(new TreeNode(0))
      return (memo[n] = results)
    }
    for (let i = 1; i < n; i += 2) {
      const leftTrees = allPossibleFBT(i)
      const rightTrees = allPossibleFBT(n - 1 - i)
      for (let leftTree of leftTrees)
        for (let rightTree of rightTrees)
          results.push(new TreeNode(0, leftTree, rightTree))
    }
    return (memo[n] = results)
  }
}
