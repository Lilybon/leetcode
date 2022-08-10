class Solution {
public:
    bool validPartition(vector<int>& nums) {
        int n = nums.size();
        vector<int> dp(n + 1, false);
        dp[0] = true;
        for (int length = 1; length <= n; ++length) {
            if (length >= 2 && nums[length - 1] == nums[length - 2]) {
                dp[length] |= dp[length - 2];
            }
            if (
                length >= 3 &&
                (
                    (nums[length - 1] == nums[length - 2] && nums[length - 2] == nums[length - 3]) ||
                    (nums[length - 2] - 1 == nums[length - 3] && nums[length - 1] - 1 == nums[length - 2])
                )
            ) {
                dp[length] |= dp[length - 3];
            }
        }
        return dp[n];
    }
};