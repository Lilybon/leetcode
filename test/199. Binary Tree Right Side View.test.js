import { TreeNode } from './helpers/TreeNode'
import { rightSideView } from '../src/199. Binary Tree Right Side View'

describe('rightSideView', () => {
  test('it returns the values of the nodes from the right side', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(3)
    tree1.left.right = new TreeNode(5)
    tree1.right.right = new TreeNode(4)
    expect(rightSideView(tree1)).toEqual([1, 3, 4])
  })
})
