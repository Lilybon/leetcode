// Set
// class Solution {
// public:
//     bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
//         int n = nums.size();
//         set<long> s;
//         for (int i = 0; i < n; ++i) {
//             long valueI = nums[i];
//             if (i > k) s.erase(nums[i - k - 1]);
//             auto valueJ = s.lower_bound(valueI - t);
//             if (valueJ != s.end() && *valueJ - valueI <= t) return true;
//             s.insert(valueI);
//         }
//         return false;
//     }
// };

// Bucket + Sliding Window
class Solution {
public:
    bool containsNearbyAlmostDuplicate(vector<int>& nums, int k, int t) {
        int n = nums.size();
        unordered_map<int, int> bucketDict;
        long bucketSize = (long) t + 1;
        for (int i = 0; i < n; ++i) {
            int bucketNumber = nums[i] / bucketSize - (nums[i] < 0 ? 1 : 0);
            if (bucketDict.find(bucketNumber) != bucketDict.end()) {
                return true;
            }
            if (bucketDict.find(bucketNumber + 1) != bucketDict.end() && (long) bucketDict[bucketNumber + 1] - nums[i] <= t) {
                return true;
            }
            if (bucketDict.find(bucketNumber - 1) != bucketDict.end() && (long) nums[i] - bucketDict[bucketNumber - 1] <= t) {
                return true;
            }
            bucketDict[bucketNumber] = nums[i];
            if (i >= k) {
                bucketDict.erase(nums[i - k] / bucketSize);
            }
        }
        return false;
    }
};