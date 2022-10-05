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
 * @param {number} val
 * @param {number} depth
 * @return {TreeNode}
 */

// DFS
// function addOneRow(root, val, depth) {
//   if (depth === 1) return new TreeNode(val, root, null)
//   graft(root, depth)
//   return root
//   function graft(parent, depth) {
//     if (!parent) return
//     if (depth === 2) {
//       ;(parent.left = new TreeNode(val, parent.left, null)),
//         (parent.right = new TreeNode(val, null, parent.right))
//       return
//     }
//     graft(parent.left, depth - 1)
//     graft(parent.right, depth - 1)
//   }
// }

// BFS
function addOneRow(root, val, depth) {
  const dummy = new TreeNode(undefined, root),
    queue = [dummy]
  for (let i = 0; i < depth - 1; i++) {
    for (let j = queue.length; j > 0; j--) {
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  for (let node of queue) {
    node.left = new TreeNode(val, node.left)
    node.right = new TreeNode(val, undefined, node.right)
  }
  return dummy.left
}
