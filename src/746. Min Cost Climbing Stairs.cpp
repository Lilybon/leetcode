// class Solution {
// public:
//     int minCostClimbingStairs(vector<int>& cost) {
//         int n = cost.size();
//         vector<int> dp(n);
//         dp[0] = cost[0];
//         dp[1] = cost[1];
//         for (int i = 2; i < n; ++i) {
//             dp[i] = cost[i] + min(dp[i - 1], dp[i - 2]);
//         }
//         return min(dp[n - 1], dp[n - 2]);
//     }
// };

// class Solution {
// public:
//     int minCostClimbingStairs(vector<int>& cost) {
//         int n = cost.size();
//         int prev = cost[0];
//         int curr = cost[1];
//         for (int i = 2; i < n; ++i) {
//             int tmp = prev;
//             prev = curr;
//             curr = min(tmp, curr) + cost[i];
//         }
//         return min(prev, curr);
//     }
// };

class Solution {
public:
    int minCostClimbingStairs(vector<int>& cost) {
        int n = cost.size();
        for (int i = 2; i < n; ++i) {
            cost[i] += min(cost[i - 1], cost[i - 2]);
        }
        return min(cost[n - 1], cost[n - 2]);
    }
};