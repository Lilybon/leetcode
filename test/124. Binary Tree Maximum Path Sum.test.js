import { createTree } from './helpers/TreeNode'
import { maxPathSum } from '../src/124. Binary Tree Maximum Path Sum'

describe('maxPathSum', () => {
  test('it finds the maximun path sum', () => {
    const tree1 = createTree([1, 2, 3])
    expect(maxPathSum(tree1)).toBe(6)

    const tree2 = createTree([-10, 9, 20, null, null, 15, 7])
    expect(maxPathSum(tree2)).toBe(42)

    const tree3 = createTree([-2, -1])
    expect(maxPathSum(tree3)).toBe(-1)

    const tree4 = createTree([-3])
    expect(maxPathSum(tree4)).toBe(-3)
  })
})
