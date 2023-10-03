class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        counts = [0] * 101
        for v in nums:
            counts[v] += 1
            
        pair = 0
        for count in counts:
            pair += count * (count - 1) // 2
        return pair