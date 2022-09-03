// DP
// class Solution {
// public:
//     bool canJump(vector<int>& nums) {
//         int n = nums.size();
//         vector<bool> dp(n, false);
//         dp[n - 1] = true;
//         for (int i = n - 2; i >= 0; --i) {
//             int furtherJump = min(i + nums[i], n - 1);
//             for (int j = i + 1; j <= furtherJump; ++j) {
//                 if (dp[j]) {
//                     dp[i] = true;
//                     break;
//                 }
//             }
//         }
//         return dp[0] == true;
//     }
// };

// Greedy
class Solution {
public:
    bool canJump(vector<int>& nums) {
        int n = nums.size();
        int lastPos = n - 1;
        for (int i = lastPos; i >= 0; --i) {
            if (i + nums[i] >= lastPos) lastPos = i;
        }
        return lastPos == 0;
    }
};