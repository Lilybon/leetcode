import { TreeNode } from './helpers/TreeNode'
import { maxPathSum } from '../src/124. Binary Tree Maximum Path Sum'

describe('maxPathSum', () => {
  test('it finds the maximun path sum', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(3)
    expect(maxPathSum(tree1)).toBe(6)

    const tree2 = new TreeNode(-10)
    tree2.left = new TreeNode(9)
    tree2.right = new TreeNode(20)
    tree2.right.left = new TreeNode(15)
    tree2.right.right = new TreeNode(7)
    expect(maxPathSum(tree2)).toBe(42)

    const tree3 = new TreeNode(-2)
    tree3.left = new TreeNode(-1)
    expect(maxPathSum(tree3)).toBe(-1)

    const tree4 = new TreeNode(-3)
    expect(maxPathSum(tree4)).toBe(-3)
  })
})
