/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

export function lowestCommonAncestor(root, p, q) {
  if (!root) return null
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q)
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q)
  return root
}