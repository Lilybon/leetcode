class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        bucketDict = {}
        bucketSize = t + 1
        for i in range(len(nums)):
            bucketNumber = nums[i] // bucketSize
            if bucketNumber in bucketDict:
                return True
            if bucketNumber - 1 in bucketDict and abs(nums[i] - bucketDict[bucketNumber - 1]) <= t:
                return True
            if bucketNumber + 1 in bucketDict and abs(nums[i] - bucketDict[bucketNumber + 1]) <= t:
                return True
            bucketDict[bucketNumber] = nums[i]
            if i >= k:
                del bucketDict[nums[i - k] // bucketSize]
        return False