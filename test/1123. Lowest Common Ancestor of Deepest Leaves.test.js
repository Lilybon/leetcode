import { TreeNode } from './helpers/TreeNode'
import { lcaDeepestLeaves } from '../src/1123. Lowest Common Ancestor of Deepest Leaves'

describe('lcaDeepestLeaves', () => {
  test('it returns the lowest common ancestor of its deepest leaves', () => {
    const lca1 = new TreeNode(2)
    lca1.left = new TreeNode(7)
    lca1.right = new TreeNode(4)
    const tree1 = new TreeNode(3)
    tree1.left = new TreeNode(5)
    tree1.right = new TreeNode(1)
    tree1.left.left = new TreeNode(6)
    tree1.left.right = lca1
    tree1.right.left = new TreeNode(0)
    tree1.right.right = new TreeNode(8)
    expect(lcaDeepestLeaves(tree1)).toBe(lca1)

    const lca2 = new TreeNode(1)
    const tree2 = lca2
    expect(lcaDeepestLeaves(tree2)).toBe(lca2)

    const lca3 = new TreeNode(2)
    const tree3 = new TreeNode(0)
    tree3.left = new TreeNode(1)
    tree3.right = new TreeNode(3)
    tree3.left.right = lca3
    expect(lcaDeepestLeaves(tree3)).toBe(lca3)
  })
})
