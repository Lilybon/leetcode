import { createTree } from './helpers/TreeNode'
import { largestValues } from '../src/515. Find Largest Value in Each Tree Row'

describe('largestValues', () => {
  test('it returns an array of the largest value in each row of the tree (0-indexed)', () => {
    const tree1 = createTree([1, 3, 2, 5, 3, null, 9])
    expect(largestValues(tree1)).toEqual([1, 3, 9])

    const tree2 = createTree([1, 2, 3])
    expect(largestValues(tree2)).toEqual([1, 3])

    const tree3 = createTree([1])
    expect(largestValues(tree3)).toEqual([1])

    const tree4 = createTree([1, null, 2])
    expect(largestValues(tree4)).toEqual([1, 2])

    const tree5 = createTree([])
    expect(largestValues(tree5)).toEqual([])
  })
})
