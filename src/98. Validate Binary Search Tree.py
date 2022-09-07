# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.valid(root, float('-inf'), float('inf'))
    def valid(self, root: Optional[TreeNode], min: float, max: float):
        if not root:
            return True
        if min >= root.val or root.val >= max:
            return False
        return self.valid(root.left, min, root.val) and self.valid(root.right, root.val, max)