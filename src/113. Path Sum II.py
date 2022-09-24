# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

# DFS + Stack
# class Solution:
#     def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
#         if not root:
#             return root
#         paths = []
#         stack = [(root, [root.val], root.val)]
#         while stack:
#             node, nodes, sum_of_nodes = stack.pop()
#             if not node.left and not node.right and sum_of_nodes == targetSum:
#                 paths.append(nodes)
#             if node.left:
#                 stack.append((node.left, nodes+[node.left.val], sum_of_nodes + node.left.val))
#             if node.right:
#                 stack.append((node.right, nodes+[node.right.val], sum_of_nodes + node.right.val))
#         return paths

# Preorder + Backtracking
class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        paths = []
        nodes = []
        def preorder (node: Optional[TreeNode], sum_of_nodes: int) -> None:
            if not node:
                return
            sum_of_nodes -= node.val
            nodes.append(node.val)
            if not node.left and not node.right and sum_of_nodes == 0:
                paths.append(nodes.copy())
            else:
                preorder(node.left, sum_of_nodes)
                preorder(node.right, sum_of_nodes)
            nodes.pop()
        preorder(root, targetSum)
        return paths
        