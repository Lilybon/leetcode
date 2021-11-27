import { createTree } from './helpers/TreeNode'
import { rightSideView } from '../src/199. Binary Tree Right Side View'

describe('rightSideView', () => {
  test('it returns the values of the nodes from the right side', () => {
    const tree1 = createTree([1, 2, 3, null, 5, null, 4])
    expect(rightSideView(tree1)).toEqual([1, 3, 4])
  })
})
