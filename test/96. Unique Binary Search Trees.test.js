import { numTrees } from '../src/96. Unique Binary Search Trees'

describe('numTrees', () => {
  test("it counts how many structurally unique BST's (binary search trees) that store values 1 ... n", () => {
    expect(numTrees(3)).toBe(5)
  })
})
