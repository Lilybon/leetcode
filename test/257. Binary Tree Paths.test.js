import { createTree } from './helpers/TreeNode'
import { binaryTreePaths } from '../src/257. Binary Tree Paths'

describe('binaryTreePaths', () => {
  test('it returns all root-to-leaf paths given a binary tree', () => {
    const tree1 = createTree([1, 2, 3, null, 5])
    expect(binaryTreePaths(tree1)).toEqual(
      expect.arrayContaining(['1->2->5', '1->3']),
    )
  })
})
