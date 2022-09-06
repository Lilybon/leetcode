class Solution:
    def longestNiceSubarray(self, nums: List[int]) -> int:
        j = used = res = 0
        for i in range(len(nums)):
            while used & nums[i]:
                used ^= nums[j]
                j += 1
            used |= nums[i]
            res = max(res, i - j + 1)
        return res