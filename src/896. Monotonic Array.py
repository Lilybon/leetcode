class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        def isDecreasing(nums: List[int]) -> bool:
            for i in range(1, len(nums)):
                if nums[i - 1] < nums[i]:
                    return False
            return True

        def isIncreasing(nums: List[int]) -> bool:
            for i in range(1, len(nums)):
                if nums[i - 1] > nums[i]:
                    return False
            return True

        return isDecreasing(nums) or isIncreasing(nums)