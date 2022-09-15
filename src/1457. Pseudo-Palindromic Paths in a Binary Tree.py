# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root: Optional[TreeNode], count: int = 0) -> int:
        if not root:
            return 0
        count ^= 1 << (root.val - 1)
        if not root.left and not root.right and (count & count - 1) == 0:
            return 1
        return self.pseudoPalindromicPaths(root.left, count) + self.pseudoPalindromicPaths(root.right, count)
        