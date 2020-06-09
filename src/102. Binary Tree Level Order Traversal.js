/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const levelOrder = (root) => {
  const bfs = (node, level) => {
    if (node) {
      // generate new level container only when the first next level element comes up
      if (tvs.length < level) tvs.push([])
      tvs[level - 1].push(node.val)
      if (node.left) bfs(node.left, level + 1)
      if (node.right) bfs(node.right, level + 1)
    }
  }
  let tvs = [],
    lv = 1
  bfs(root, lv)
  return tvs
}
