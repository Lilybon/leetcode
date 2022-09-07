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
        lcaR = self.lowestCommonAncestor(root.left, p, q)
        lcaL = self.lowestCommonAncestor(root.right, p, q)
        return root if lcaR and lcaL else lcaR or lcaL
        