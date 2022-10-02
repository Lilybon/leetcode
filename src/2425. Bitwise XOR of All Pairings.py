class Solution:
    def xorAllNums(self, nums1: List[int], nums2: List[int]) -> int:
        x = y = 0
        for num in nums1:
            x ^= num
        for num in nums2:
            y ^= num
        return (len(nums1) % 2 * y) ^ (len(nums2) % 2 * x)