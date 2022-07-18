import { createTree } from './helpers/TreeNode'
import { checkTree } from '../src/2236. Root Equals Sum of Children'

describe('checkTree', () => {
  test('it returns true if the value of the root is equal to the sum of the values of its two children', () => {
    const tree = createTree([10, 4, 6])
    expect(checkTree(tree)).toBe(true)
  })
  test('it returns false otherwise', () => {
    const tree = createTree([5, 3, 1])
    expect(checkTree(tree)).toBe(false)
  })
})
