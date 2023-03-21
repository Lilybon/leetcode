class Solution {
public:
    long long zeroFilledSubarray(vector<int>& nums) {
        int left = 0;
        long long count = 0;
        for (int right = 0; right <= nums.size(); ++right) {
            if (right == nums.size() || nums[right] != 0) {
                int n = right - left;
                count += (long long) n * (n + 1) / 2;
                left = right + 1;
            }
        }
        return count;
    }
};