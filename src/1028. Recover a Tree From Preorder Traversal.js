/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {string} S
 * @return {TreeNode}
 */

function recoverFromPreorder(S) {
  const dash = '-',
    n = S.length,
    stack = []

  let i = 0
  while (i < n) {
    let level = 0
    while (i < n && S[i] === dash) {
      level++
      i++
    }

    let value = 0
    while (i < n && S[i] !== dash) {
      value = value * 10 + (S[i] - 0)
      i++
    }

    const childNode = new TreeNode(value)
    while (stack.length > level) stack.pop()
    if (stack.length) {
      const parentNode = stack[stack.length - 1]
      if (!parentNode.left) parentNode.left = childNode
      else parentNode.right = childNode
    }
    stack.push(childNode)
  }

  return stack[0]
}
