import { TreeNode } from './helpers/TreeNode'
import { deepestLeavesSum } from '../src/1302. Deepest Leaves Sum'

describe('rdeepestLeavesSum', () => {
  test('it returns the sum of values of its deepest leaves', () => {
    const root = new TreeNode(1)
    root.left = new TreeNode(2)
    root.right = new TreeNode(3)
    root.left.left = new TreeNode(4)
    root.left.right = new TreeNode(5)
    root.right.right = new TreeNode(6)
    root.left.left.left = new TreeNode(7)
    root.right.right.right = new TreeNode(8)
    expect(deepestLeavesSum(root)).toBe(15)
  })
})
