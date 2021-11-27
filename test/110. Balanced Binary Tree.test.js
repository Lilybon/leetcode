import { createTree } from './helpers/TreeNode'
import { isBalanced } from '../src/110. Balanced Binary Tree'

describe('isBalanced', () => {
  test('it determines if a balance tree is height-balanced', () => {
    const tree1 = createTree([3, 9, 20, null, null, 15, 7])
    expect(isBalanced(tree1)).toBe(true)

    const tree2 = createTree([1, 2, 2, 3, 3, null, null, 4, 4])
    expect(isBalanced(tree2)).toBe(false)

    const tree3 = createTree([])
    expect(isBalanced(tree3)).toBe(true)
  })
})
