import { TreeNode } from './helpers/TreeNode'
import { postorderTraversal } from '../src/145. Binary Tree Postorder Traversal'

describe('postorderTraversal', () => {
  test("it return the postorder traversal of its nodes' values", () => {
    const tree1 = new TreeNode(1)
    tree1.right = new TreeNode(2)
    tree1.right.left = new TreeNode(3)
    expect(postorderTraversal(tree1)).toEqual([3, 2, 1])

    const tree2 = null
    expect(postorderTraversal(tree2)).toEqual([])

    const tree3 = new TreeNode(1)
    expect(postorderTraversal(tree3)).toEqual([1])

    const tree4 = new TreeNode(1)
    tree4.left = new TreeNode(2)
    expect(postorderTraversal(tree4)).toEqual([2, 1])

    const tree5 = new TreeNode(1)
    tree5.right = new TreeNode(2)
    expect(postorderTraversal(tree5)).toEqual([2, 1])
  })
})
