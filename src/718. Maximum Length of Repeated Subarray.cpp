// DP
// class Solution {
// public:
//     int findLength(vector<int>& nums1, vector<int>& nums2) {
//         int m = nums1.size(), n = nums2.size(), ans = 0;
//         vector<vector<int>> dp(m + 1, vector<int>(n + 1));
//         for (int i = 1; i <= m; ++i) {
//             for (int j = 1; j <= n; ++j) {
//                 if (nums1[i - 1] == nums2[j - 1])
//                     dp[i][j] = dp[i - 1][j - 1] + 1;
//                 else
//                     dp[i][j] = 0;
//                 ans = max(ans, dp[i][j]);
//             }
//         }
//         return ans;
//     }
// };

// Optimized DP
class Solution {
public:
    int findLength(vector<int>& nums1, vector<int>& nums2) {
        if (nums1.size() < nums2.size()) return findLength(nums2, nums1);
        int m = nums1.size(), n = nums2.size();
        vector<int> current(n + 1), prev(n + 1);
        int ans = 0;
        for (int i = 1; i <= m; ++i) {
            for (int j = 1; j <= n; ++j) {
                if (nums1[i - 1] == nums2[j - 1])
                    current[j] = prev[j - 1] + 1;
                else
                    current[j] = 0;
                ans = max(ans, current[j]);
            }
            current.swap(prev);
        }
        return ans;
    }
};