class Solution:
    def containsNearbyAlmostDuplicate(self, nums: List[int], k: int, t: int) -> bool:
        bucket_dict = {}
        bucket_size = t + 1
        for i in range(len(nums)):
            bucketNumber = nums[i] // bucket_size
            if bucketNumber in bucket_dict:
                return True
            if bucketNumber - 1 in bucket_dict and abs(nums[i] - bucket_dict[bucketNumber - 1]) <= t:
                return True
            if bucketNumber + 1 in bucket_dict and abs(nums[i] - bucket_dict[bucketNumber + 1]) <= t:
                return True
            bucket_dict[bucketNumber] = nums[i]
            if i >= k:
                del bucket_dict[nums[i - k] // bucket_size]
        return False