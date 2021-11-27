import { createTree } from './helpers/TreeNode'
import { getAllElements } from '../src/1305. All Elements in Two Binary Search Trees'

describe('getAllElements', () => {
  test('it returns a list containing all the integers from both trees sorted in ascending order', () => {
    const tree1 = createTree([2, 1, 4])
    const tree2 = createTree([1, 0, 3])
    expect(getAllElements(tree1, tree2)).toEqual([0, 1, 1, 2, 3, 4])

    const tree3 = createTree([0, -10, 10])
    const tree4 = createTree([5, 1, 7, 0, 2])
    expect(getAllElements(tree3, tree4)).toEqual([-10, 0, 0, 1, 2, 5, 7, 10])
    expect(getAllElements(null, tree4)).toEqual([0, 1, 2, 5, 7])
  })
})
