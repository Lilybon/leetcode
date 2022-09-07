// DP
// class Solution {
// public:
//     int maxProfit(vector<int>& prices) {
//         int n = prices.size();
//         vector<array<int, 3>> dp(n, {0, 0, 0});
//         // 0: sell, 1: buy, 2: cooldown
//         dp[0][1] = -prices[0];
//         for (int i = 1; i < n; ++i) {
//             dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
//             dp[i][1] = max(dp[i - 1][1], dp[i - 1][2] - prices[i]);
//             dp[i][2] = max(dp[i - 1][2], dp[i - 1][0]);
//         }
//         return max(dp[n - 1][0], dp[n - 1][2]);
//     }
// };

// Optimize DP
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int prevSell = 0,
            prevBuy = -prices[0],
            prevCooldown = 0;
        for (auto &price : prices) {
            int currentSell = max(prevSell, prevBuy + price),
                currentBuy = max(prevBuy, prevCooldown - price),
                currentCooldown = max(prevCooldown, prevSell);
            prevSell = currentSell;
            prevBuy = currentBuy;
            prevCooldown = currentCooldown;
        }
        return max(prevSell, prevCooldown);
    }
};