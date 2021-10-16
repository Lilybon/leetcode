import { TreeNode } from './helpers/TreeNode'
import { lowestCommonAncestor } from '../src/235. Lowest Common Ancestor of a Binary Search Tree'

describe('lowestCommonAncestor', () => {
  test('it finds the lowest common ancestor (LCA) of two given nodes in the BST', () => {
    const tree = new TreeNode(6)
    tree.left = new TreeNode(2)
    tree.right = new TreeNode(8)
    tree.left.left = new TreeNode(0)
    tree.left.right = new TreeNode(4)
    tree.right.left = new TreeNode(7)
    tree.right.right = new TreeNode(9)
    tree.left.right.left = new TreeNode(3)
    tree.left.right.right = new TreeNode(5)

    const p1 = tree.left,
      q1 = tree.right,
      answer1 = tree
    expect(lowestCommonAncestor(tree, p1, q1)).toBe(answer1)

    const p2 = tree.left,
      q2 = tree.left.right,
      answer2 = p2
    expect(lowestCommonAncestor(tree, p2, q2)).toBe(answer2)
  })
})
