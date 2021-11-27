import { createTree } from './helpers/TreeNode'
import { lowestCommonAncestor } from '../src/235. Lowest Common Ancestor of a Binary Search Tree'

describe('lowestCommonAncestor', () => {
  test('it finds the lowest common ancestor (LCA) of two given nodes in the BST', () => {
    const tree = createTree([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5])

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
