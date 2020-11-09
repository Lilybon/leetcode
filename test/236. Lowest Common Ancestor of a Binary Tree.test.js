import { TreeNode } from './helpers/TreeNode'
import { lowestCommonAncestor } from '../src/236. Lowest Common Ancestor of a Binary Tree'

describe('lowestCommonAncestor', () => {
  test('it finds the lowest common ancestor (LCA) of two given nodes in the tree', () => {
    const tree1 = new TreeNode(3)
    tree1.left = new TreeNode(5)
    tree1.right = new TreeNode(1)
    tree1.left.left = new TreeNode(6)
    tree1.left.right = new TreeNode(2)
    tree1.right.left = new TreeNode(0)
    tree1.right.right = new TreeNode(8)
    tree1.left.right.left = new TreeNode(7)
    tree1.left.right.right = new TreeNode(4)
    const p1 = tree1.left
    const q1 = tree1.right
    expect(lowestCommonAncestor(tree1, p1, q1)).toBe(tree1)

    const tree2 = tree1
    const p2 = tree1.left
    const q2 = tree1.left.right.right
    expect(lowestCommonAncestor(tree2, p2, q2)).toBe(p2)

    const tree3 = new TreeNode(1)
    tree3.left = new TreeNode(2)
    const p3 = tree3
    const q3 = tree3.left
    expect(lowestCommonAncestor(tree3, p3, q3)).toBe(tree3)
  })
})
