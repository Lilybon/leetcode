class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def searchFirst() -> int:
            left, right = 0, len(nums)
            while left < right:
                mid = (left + right) // 2
                if nums[mid] >= target:
                    right = mid
                else:
                    left = mid + 1
            return -1 if left >= len(nums) or nums[left] != target else left

        def searchLast() -> int:
            left, right = 0, len(nums)
            while left < right:
                mid = (left + right) // 2
                if nums[mid] <= target:
                    left = mid + 1
                else:
                    right = mid
            left -= 1
            return -1 if left < 0 or nums[left] != target else left

        return [searchFirst(), searchLast()]