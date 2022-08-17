class Solution {
    public:
        int maxProfit(vector < int > & prices, int fee) {
            int n = prices.size();
            int prevSell = 0;
            int prevBuy = -prices[0];
            for (int i = 0; i < n; ++i) {
                int currentSell = max(prevSell, prevBuy + prices[i] - fee);
                int currentBuy = max(prevBuy, prevSell - prices[i]);
                prevSell = currentSell;
                prevBuy = currentBuy;
            }
            return prevSell;
        }
};