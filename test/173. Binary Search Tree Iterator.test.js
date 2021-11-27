import { createTree } from './helpers/TreeNode'
import { BSTIterator } from '../src/173. Binary Search Tree Iterator'

describe('BSTIterator', () => {
  test('it represents an iterator over the in-order traversal of a BST', () => {
    const tree1 = createTree([7, 3, 15, null, null, 9, 20])
    const bSTIterator = new BSTIterator(tree1)
    expect(bSTIterator.next()).toBe(3)
    expect(bSTIterator.next()).toBe(7)
    expect(bSTIterator.hasNext()).toBe(true)
    expect(bSTIterator.next()).toBe(9)
    expect(bSTIterator.hasNext()).toBe(true)
    expect(bSTIterator.next()).toBe(15)
    expect(bSTIterator.hasNext()).toBe(true)
    expect(bSTIterator.next()).toBe(20)
    expect(bSTIterator.hasNext()).toBe(false)
  })
})
