// DP
// class Solution {
// public:
//     int jump(vector<int>& nums) {
//         int n = nums.size();
//         vector<int> dp(n, INT_MAX);
//         dp[n - 1] = 0;
//         for (int i = n - 2; i >= 0; --i) {
//             int furtherJump = min(i + nums[i], n - 1);
//             for (int j = i + 1; j <= furtherJump; ++j) {
//                 if (dp[j] < dp[i] - 1) dp[i] = dp[j] + 1;
//             }
//         }
//         return dp[0];
//     }
// };

// Greedy
class Solution {
public:
    int jump(vector<int>& nums) {
        int n = nums.size();
        int jumps = 0;
        int end = 0;
        int farthest = 0;
        for (int i = 0; i < n - 1; ++i) {
            farthest = max(farthest, i + nums[i]);
            if (i == end) {
                jumps++;
                end = farthest;
            }
        }
        return jumps;
    }
};