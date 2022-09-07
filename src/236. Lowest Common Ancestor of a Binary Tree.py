# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        if not root or root is p or root is q:
            return root
        lca_r = self.lowestCommonAncestor(root.left, p, q)
        lca_l = self.lowestCommonAncestor(root.right, p, q)
        return root if lca_r and lca_l else lca_r or lca_l
        