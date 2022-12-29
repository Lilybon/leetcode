// dp[n] = dp[n - 1] + dp[n - 2] + 2 * (dp[n - 3] + ... + d[0])
//       = dp[n - 1] + dp[n - 2] + dp[n - 3] + dp[n - 3] + 2 * (dp[n - 4] + ... + d[0])
//       = dp[n - 1] + dp[n - 3] + (dp[n - 2] + dp[n - 3]+ 2 * (dp[n - 4] + ... + d[0]))
//       = dp[n - 1] + dp[n - 3] + dp[n - 1]
//       = 2 * dp[n - 1] + dp[n - 3]

// class Solution {
// public:
//     int numTilings(int n) {
//         if (n < 3) return n;
        
//         int mod = 1e9 + 7;
//         long dp[1001] = {0};
//         dp[1] = 1;
//         dp[2] = 2;
//         dp[3] = 5;
        
//         for (int i = 4; i <= n; i++) {
//             dp[i] = (2 * dp[i - 1] + dp[i - 3]) % mod;
//         }
        
//         return dp[n];
//     }
// };

class Solution {
public:
    int numTilings(int n) {
        if (n < 3) return n;
        
        int mod = 1e9 + 7;
        long dp[3] = {1, 2, 5};
        
        for (int i = 4; i <= n; i++) {
            long nextDp1 = dp[2];
            dp[2] = (2 * dp[2] + dp[0]) % mod;
            dp[0] = dp[1];
            dp[1] = nextDp1;
        }
        
        return dp[2];
    }
};