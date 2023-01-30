// class Solution {
// public:
//     int tribonacci(int n) {
//         if (n <= 1) return n;
//         if (n == 2) return 1;
//         vector<int> dp(n + 1);
//         dp[0] = 0;
//         dp[1] = 1;
//         dp[2] = 1;
//         for (int i = 3; i <= n; ++i)
//             dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
//         return dp.back();
//     }
// };

class Solution {
public:
    int tribonacci(int n) {
        int dp[3] = {0, 1, 1};
        if (n <= 2) return dp[n];
        for (int i = 3; i <= n; ++i) {
            int nextDp1 = dp[2];
            dp[2] = dp[0] + dp[1] + dp[2];
            dp[0] = dp[1];
            dp[1] = nextDp1;
        }
        return dp[2];
    }
};