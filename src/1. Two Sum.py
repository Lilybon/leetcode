class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        map = {}
        for index, value in enumerate(nums):
            if target - value in map:
                return [map[target - value], index]
            else:
                map[value] = index
