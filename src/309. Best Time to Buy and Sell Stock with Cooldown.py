class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        prev_sell = prev_cooldown = 0
        prev_buy = -prices[0]
        for price in prices:
            prev_sell, prev_buy, prev_cooldown = max(prev_sell, prev_buy + price), max(prev_buy, prev_cooldown - price), max(prev_cooldown, prev_sell)
        return max(prev_sell, prev_cooldown)