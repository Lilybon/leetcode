import { TreeNode } from './helpers/TreeNode'
import { binaryTreePaths } from '../src/257. Binary Tree Paths'

describe('binaryTreePaths', () => {
  test('it returns all root-to-leaf paths given a binary tree', () => {
    const tree1 = new TreeNode(1)
    tree1.left = new TreeNode(2)
    tree1.right = new TreeNode(3)
    tree1.left.right = new TreeNode(5)
    expect(binaryTreePaths(tree1)).toEqual(
      expect.arrayContaining(['1->2->5', '1->3'])
    )
  })
})
