# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# DFS
# class Solution:
#     def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
#         if depth == 1: return TreeNode(val, root, None)
#         self.graft(root, val, depth)
#         return root
#     def graft(self, root: Optional[TreeNode], val: int, depth: int) -> None:
#         if not root: return
#         if depth == 2:
#             root.left = TreeNode(val, root.left, None)
#             root.right = TreeNode(val, None, root.right)
#             return
#         self.graft(root.left, val, depth - 1)
#         self.graft(root.right, val, depth - 1)

# BFS
class Solution:
    def addOneRow(self, root: Optional[TreeNode], val: int, depth: int) -> Optional[TreeNode]:
        dummy = TreeNode(None, root, None)
        queue = [dummy]
        for _ in range(depth - 1):
            queue = [child for node in queue for child in (node.left, node.right) if child]
        for node in queue:
            node.left = TreeNode(val, node.left)
            node.right = TreeNode(val, None, node.right)
        return dummy.left