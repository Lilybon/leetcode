class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        left = sum(nums)
        ans = 0
        right = 0
        for i in range(len(nums) - 1):
            right += nums[i]
            left -= nums[i]
            if right >= left:
                ans += 1
        return ans