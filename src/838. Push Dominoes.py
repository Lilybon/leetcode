# Two Pointer
# class Solution:
#     def pushDominoes(self, dominoes: str) -> str:
#         n = len(dominoes)
#         ans = list(dominoes)
#         left = 0
#         for right in range(n):
#             if dominoes[right] == "L" or dominoes[right] == "R" or right == n - 1:
#                 self.fillSide(ans, left, right)
#                 left = right
#         return "".join(ans)

#     def fillSide(self, dominoes: List[str], left: int, right: int) -> None:
#         if dominoes[right] == "L":
#             if dominoes[left] == "R":
#                 while left < right:
#                     dominoes[left] = "R"
#                     dominoes[right] = "L"
#                     left += 1
#                     right -= 1
#             else:
#                 while left <= right:
#                     dominoes[left] = "L"
#                     left += 1
#         elif dominoes[left] == "R":
#             while left <= right:
#                 dominoes[left] = "R"
#                 left += 1

# Calculate Force
class Solution:
    def pushDominoes(self, dominoes: str) -> str:
        n = len(dominoes)
        ans = [0] * n
        force = 0
        for i in range(n):
            char = dominoes[i]
            if char == "R":
                force = n
            elif char == "L":
                force = 0
            else:
                force = max(force - 1, 0)
            ans[i] += force

        force = 0
        for i in range(n - 1, -1, -1):
            char = dominoes[i]
            if char == "L":
                force = n
            elif char == "R":
                force = 0
            else:
                force = max(force - 1, 0)
            ans[i] -= force

        for i in range(n):
            ans[i] = "." if ans[i] == 0 else ("R" if ans[i] > 0 else "L")
        
        return "".join(ans)