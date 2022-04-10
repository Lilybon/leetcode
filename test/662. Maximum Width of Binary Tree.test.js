import { createTree } from './helpers/TreeNode'
import { widthOfBinaryTree } from '../src/662. Maximum Width of Binary Tree'

describe('widthOfBinaryTree', () => {
  test('it returns the maximum width among all levels', () => {
    const tree1 = createTree([1, 3, 2, 5, 3, null, 9])
    expect(widthOfBinaryTree(tree1)).toBe(4)

    const tree2 = createTree([
      1,
      3,
      2,
      5,
      null,
      null,
      9,
      6,
      null,
      null,
      null,
      null,
      null,
      7,
    ])
    expect(widthOfBinaryTree(tree2)).toBe(7)

    const tree3 = createTree([1, 3, 2, 5])
    expect(widthOfBinaryTree(tree3)).toBe(2)
  })
})
