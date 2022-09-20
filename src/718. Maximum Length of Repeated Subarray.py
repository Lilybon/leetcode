# DP
# class Solution:
#     def findLength(self, nums1: List[int], nums2: List[int]) -> int:
#         m, n, ans = len(nums1), len(nums2), 0
#         dp = [[0] * (n + 1) for _ in range(m + 1)]
#         for i in range(1, m + 1):
#             for j in range(1, n + 1):
#                 if nums1[i - 1] == nums2[j - 1]:
#                     dp[i][j] = dp[i - 1][j - 1] + 1
#                 else
#                     dp[i][j] = 0
#                     ans = max(ans, dp[i][j])
#         return ans

# Optimized DP
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        if len(nums1) < len(nums2):
            return self.findLength(nums2, nums1)
        m, n, ans = len(nums1), len(nums2), 0
        current, prev = [0] * (n + 1), [0] * (n + 1)
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    current[j] = prev[j - 1] + 1
                else:
                    current[j] = 0
                ans = max(ans, current[j])
            current, prev = prev, current
        return ans