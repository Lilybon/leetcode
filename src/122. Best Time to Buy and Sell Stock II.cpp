// DP
// class Solution {
// public:
//     int maxProfit(vector<int>& prices) {
//         int n = prices.size();
//         vector<array<int, 2>> dp(n, {0, 0});
//         dp[0][1] = -prices[0];
//         for (int i = 1; i < n; ++i) {
//             dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
//             dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
//         }
//         return dp[n - 1][0];
//     }
// };

// Optimize DP
// class Solution {
// public:
//     int maxProfit(vector<int>& prices) {
//         int n = prices.size(),
//             prevBuy = -prices[0],
//             prevSell = 0;
//         for (auto &price : prices) {
//             int currentBuy = max(prevBuy, prevSell - price),
//                 currentSell = max(prevSell, prevBuy + price);
//             prevBuy = currentBuy;
//             prevSell = currentSell;
//         }
//         return prevSell;
//     }
// };

// Greedy
class Solution {
    public:
        int maxProfit(vector < int > & prices) {
            int result = 0;
            for (int i = 1; i < prices.size(); i++) {
                result += max(prices[i] - prices[i - 1], 0);
            }
            return result;
        }
};