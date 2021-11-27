import { createTree } from './helpers/TreeNode'
import { postorderTraversal } from '../src/145. Binary Tree Postorder Traversal'

describe('postorderTraversal', () => {
  test("it return the postorder traversal of its nodes' values", () => {
    const tree1 = createTree([1, null, 2, null, null, 3])
    expect(postorderTraversal(tree1)).toEqual([3, 2, 1])

    const tree2 = createTree([])
    expect(postorderTraversal(tree2)).toEqual([])

    const tree3 = createTree([1])
    expect(postorderTraversal(tree3)).toEqual([1])

    const tree4 = createTree([1, 2])
    expect(postorderTraversal(tree4)).toEqual([2, 1])

    const tree5 = createTree([1, null, 2])
    expect(postorderTraversal(tree5)).toEqual([2, 1])
  })
})
