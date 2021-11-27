import { createTree } from './helpers/TreeNode'
import { findFrequentTreeSum } from '../src/508. Most Frequent Subtree Sum'

describe('findFrequentTreeSum', () => {
  test('it returns all the subtree sums with the highest frequency in any order', () => {
    const tree1 = createTree([5, 2, -3])
    expect(findFrequentTreeSum(tree1)).toEqual(
      expect.arrayContaining([2, -3, 4])
    )

    const tree2 = createTree([5, 2, -5])
    expect(findFrequentTreeSum(tree2)).toEqual([2])
  })
})
