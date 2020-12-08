import { TreeNode } from './helpers/TreeNode'
import { largestValues } from '../src/515. Find Largest Value in Each Tree Row'

describe('largestValues', () => {
  test('it returns an array of the largest value in each row of the tree (0-indexed)', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(3)
    tree1.right = new TreeNode(2)
    tree1.left.left = new TreeNode(5)
    tree1.left.right = new TreeNode(3)
    tree1.right.right = new TreeNode(9)
    expect(largestValues(tree1)).toEqual([1, 3, 9])

    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(2)
    tree2.right = new TreeNode(3)
    expect(largestValues(tree2)).toEqual([1, 3])

    const tree3 = new TreeNode(1)
    expect(largestValues(tree3)).toEqual([1])

    const tree4 = new TreeNode(1)
    tree4.right = new TreeNode(2)
    expect(largestValues(tree4)).toEqual([1, 2])

    const tree5 = null
    expect(largestValues(tree5)).toEqual([])
  })
})
