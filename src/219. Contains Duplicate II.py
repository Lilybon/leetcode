class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        n = len(nums)
        s = set()
        k = min(k, n - 1)
        for i in range(n):
            if i > k: s.remove(nums[i - k - 1])
            if nums[i] in s: return True
            s.add(nums[i])
        return False
            
            
        