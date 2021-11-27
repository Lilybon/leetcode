import { createTree } from './helpers/TreeNode'
import { lcaDeepestLeaves } from '../src/1123. Lowest Common Ancestor of Deepest Leaves'

describe('lcaDeepestLeaves', () => {
  test('it returns the lowest common ancestor of its deepest leaves', () => {
    const tree1 = createTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
    const lca1 = tree1.left.right
    expect(lcaDeepestLeaves(tree1)).toBe(lca1)

    const tree2 = createTree([1])
    const lca2 = tree2
    expect(lcaDeepestLeaves(tree2)).toBe(lca2)

    const tree3 = createTree([0, 1, 3, null, 2])
    const lca3 = tree3.left.right
    expect(lcaDeepestLeaves(tree3)).toBe(lca3)
  })
})
