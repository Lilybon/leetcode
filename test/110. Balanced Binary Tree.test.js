import { TreeNode } from './helpers/TreeNode'
import { isBalanced } from '../src/110. Balanced Binary Tree'

describe('isBalanced', () => {
  test('it determines if a balance tree is height-balanced', () => {
    const tree1 = new TreeNode(3)
    tree1.left = new TreeNode(9)
    tree1.right = new TreeNode(20)
    tree1.right.left = new TreeNode(15)
    tree1.right.right = new TreeNode(7)
    expect(isBalanced(tree1)).toBe(true)

    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(2)
    tree2.right = new TreeNode(2)
    tree2.left.left = new TreeNode(3)
    tree2.left.right = new TreeNode(3)
    tree2.left.left.left = new TreeNode(4)
    tree2.left.left.right = new TreeNode(4)
    expect(isBalanced(tree2)).toBe(false)

    const tree3 = null
    expect(isBalanced(tree3)).toBe(true)
  })
})
