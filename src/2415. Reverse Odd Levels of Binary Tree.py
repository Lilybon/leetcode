# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# DFS
# class Solution:
#     def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
#         self.dfs(root.left, root.right, 1)
#         return root
#     def dfs(self, left_root: Optional[TreeNode], right_root: Optional[TreeNode], level: int):
#         if not left_root or not right_root:
#             return
#         if level % 2:
#             left_root.val, right_root.val = right_root.val, left_root.val
#         self.dfs(left_root.left, right_root.right, level + 1)
#         self.dfs(left_root.right, right_root.left, level + 1)

# BFS
class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        d = deque([root])
        level = 0
        while d:
            n = len(d)
            if level % 2 == 1:
                for i in range(n // 2):
                    d[i].val, d[n - 1 - i].val = d[n - 1 - i].val, d[i].val
            for _ in range(n):
                node = d.popleft()
                if node.left:
                    d.append(node.left)
                if node.right:
                    d.append(node.right)
            level += 1
        return root
        