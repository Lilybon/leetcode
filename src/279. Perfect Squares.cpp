class Solution {
public:
    int numSquares(int n) {
        vector<int> dp(n + 1, INT_MAX);
        dp[0] = 0;
        for (int i = 1; i * i <= n; ++i) {
            int square = i * i;
            for (int j = square; j <= n; ++j) {
                dp[j] = min(dp[j - square] + 1, dp[j]);
            }
        }
        return dp[n];
    }
};