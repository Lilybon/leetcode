class Solution:
    def sumEvenAfterQueries(self, nums: List[int], queries: List[List[int]]) -> List[int]:
        S = sum(num for num in nums if num % 2 == 0)
        ans = []
        for val, i in queries:
            if nums[i] % 2 == 0:
                S -= nums[i]
            nums[i] += val
            if nums[i] % 2 == 0:
                S += nums[i]
            ans.append(S)
        return ans