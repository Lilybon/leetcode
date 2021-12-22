import { createTree } from './helpers/TreeNode'
import { pathSum } from '../src/437. Path Sum III'

describe('pathSum', () => {
  test('it returns the number of paths where the sum of the values along the path equals targetSum', () => {
    const tree1 = createTree([10, 5, -3, 3, 2, null, 11, 3, -2, null, 1])
    expect(pathSum(tree1, 8)).toBe(3)

    const tree2 = createTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
    expect(pathSum(tree2, 22)).toBe(3)
  })
})
