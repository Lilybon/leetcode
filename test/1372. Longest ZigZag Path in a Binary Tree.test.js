import { TreeNode } from './helpers/TreeNode'
import { longestZigZag } from '../src/1372. Longest ZigZag Path in a Binary Tree'

describe('longestZigZag', () => {
  test('it returns the longest ZigZag path contained in the tree', () => {
    const root1 = new TreeNode(1)
    root1.right = new TreeNode(1)
    root1.right.left = new TreeNode(1)
    root1.right.right = new TreeNode(1)
    root1.right.right.left = new TreeNode(1)
    root1.right.right.right = new TreeNode(1)
    root1.right.right.left.right = new TreeNode(1)
    root1.right.right.left.right.right = new TreeNode(1)
    expect(longestZigZag(root1)).toBe(3)

    const root2 = new TreeNode(1)
    root2.left = new TreeNode(1)
    root2.right = new TreeNode(1)
    root2.left.right = new TreeNode(1)
    root2.left.right.left = new TreeNode(1)
    root2.left.right.right = new TreeNode(1)
    root2.left.right.left.right = new TreeNode(1)
    expect(longestZigZag(root2)).toBe(4)

    const root3 = new TreeNode(1)
    expect(longestZigZag(root3)).toBe(0)
  })
})
