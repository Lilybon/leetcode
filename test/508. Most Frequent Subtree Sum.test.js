import { TreeNode } from './helpers/TreeNode'
import { findFrequentTreeSum } from '../src/508. Most Frequent Subtree Sum'

describe('findFrequentTreeSum', () => {
  test('it returns all the subtree sums with the highest frequency in any order', () => {
    const tree1 = new TreeNode(5)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(-3)
    expect(findFrequentTreeSum(tree1)).toEqual(
      expect.arrayContaining([2, -3, 4])
    )

    const tree2 = new TreeNode(5)
    tree2.left = new TreeNode(2)
    tree2.right = new TreeNode(-5)
    expect(findFrequentTreeSum(tree2)).toEqual([2])
  })
})
