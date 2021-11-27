import { createTree } from './helpers/TreeNode'
import { deepestLeavesSum } from '../src/1302. Deepest Leaves Sum'

describe('rdeepestLeavesSum', () => {
  test('it returns the sum of values of its deepest leaves', () => {
    const root = createTree([
      1,
      2,
      3,
      4,
      5,
      null,
      6,
      7,
      null,
      null,
      null,
      null,
      null,
      null,
      8,
    ])
    expect(deepestLeavesSum(root)).toBe(15)
  })
})
