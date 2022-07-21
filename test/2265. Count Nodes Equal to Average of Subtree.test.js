import { createTree } from './helpers/TreeNode'
import { averageOfSubtree } from '../src/2265. Count Nodes Equal to Average of Subtree'

describe('averageOfSubtree', () => {
  test('it returns the number of nodes where the value of the node is equal to the average of the values in its subtree', () => {
    const tree1 = createTree([4, 8, 5, 0, 1, null, 6])
    expect(averageOfSubtree(tree1)).toBe(5)

    const tree2 = createTree([1])
    expect(averageOfSubtree(tree2)).toBe(1)
  })
})
