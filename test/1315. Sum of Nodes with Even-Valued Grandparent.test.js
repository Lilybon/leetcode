import { TreeNode } from './helpers/TreeNode'
import { sumEvenGrandparent } from '../src/1315. Sum of Nodes with Even-Valued Grandparent'

describe('sumEvenGrandparent', () => {
  test('it returns the sum of values of nodes with even-valued grandparent', () => {
    const root = new TreeNode(6)
    root.left = new TreeNode(7)
    root.right = new TreeNode(8)
    root.left.left = new TreeNode(2)
    root.left.right = new TreeNode(7)
    root.right.left = new TreeNode(1)
    root.right.right = new TreeNode(3)
    root.left.left.left = new TreeNode(9)
    root.left.right.left = new TreeNode(1)
    root.left.right.right = new TreeNode(4)
    root.right.right.right = new TreeNode(5)
    expect(sumEvenGrandparent(root)).toBe(18)
  })
})
