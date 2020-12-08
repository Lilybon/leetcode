import { TreeNode } from './helpers/TreeNode'
import { getAllElements } from '../src/1305. All Elements in Two Binary Search Trees'

describe('getAllElements', () => {
  test('it returns a list containing all the integers from both trees sorted in ascending order', () => {
    const tree1 = new TreeNode(2)
    tree1.left = new TreeNode(1)
    tree1.right = new TreeNode(4)
    const tree2 = new TreeNode(1)
    tree2.left = new TreeNode(0)
    tree2.right = new TreeNode(3)
    expect(getAllElements(tree1, tree2)).toEqual([0, 1, 1, 2, 3, 4])

    const tree3 = new TreeNode(0)
    tree3.left = new TreeNode(-10)
    tree3.right = new TreeNode(10)
    const tree4 = new TreeNode(5)
    tree4.left = new TreeNode(1)
    tree4.right = new TreeNode(7)
    tree4.left.left = new TreeNode(0)
    tree4.left.right = new TreeNode(2)
    expect(getAllElements(tree3, tree4)).toEqual([-10, 0, 0, 1, 2, 5, 7, 10])
    expect(getAllElements(null, tree4)).toEqual([0, 1, 2, 5, 7])
  })
})
