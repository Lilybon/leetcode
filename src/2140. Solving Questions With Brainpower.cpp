class Solution {
public:
    long long mostPoints(vector<vector<int>>& qestions) {
        long long dp[200001] = {};
        for (int i = qestions.size() - 1; i >= 0; --i) {
            dp[i] = max(dp[i + 1], dp[qestions[i][1] + i + 1] + qestions[i][0]);
        }
        return dp[0];
    }
};