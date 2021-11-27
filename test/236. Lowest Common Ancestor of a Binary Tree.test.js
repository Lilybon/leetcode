import { createTree } from './helpers/TreeNode'
import { lowestCommonAncestor } from '../src/236. Lowest Common Ancestor of a Binary Tree'

describe('lowestCommonAncestor', () => {
  test('it finds the lowest common ancestor (LCA) of two given nodes in the tree', () => {
    const tree1 = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const p1 = tree1.left
    const q1 = tree1.right
    expect(lowestCommonAncestor(tree1, p1, q1)).toBe(tree1)

    const tree2 = tree1
    const p2 = tree1.left
    const q2 = tree1.left.right.right
    expect(lowestCommonAncestor(tree2, p2, q2)).toBe(p2)

    const tree3 = createTree([1, 2])
    const p3 = tree3
    const q3 = tree3.left
    expect(lowestCommonAncestor(tree3, p3, q3)).toBe(tree3)
  })
})
