import { createTree } from './helpers/TreeNode'
import { sumEvenGrandparent } from '../src/1315. Sum of Nodes with Even-Valued Grandparent'

describe('sumEvenGrandparent', () => {
  test('it returns the sum of values of nodes with even-valued grandparent', () => {
    const root = createTree([
      6,
      7,
      8,
      2,
      7,
      1,
      3,
      9,
      null,
      1,
      4,
      null,
      null,
      null,
      5,
    ])
    expect(sumEvenGrandparent(root)).toBe(18)
  })
})
