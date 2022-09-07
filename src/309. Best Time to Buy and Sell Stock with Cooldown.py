class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        prevSell = prevCooldown = 0
        prevBuy = -prices[0]
        for price in prices:
            prevSell, prevBuy, prevCooldown = max(prevSell, prevBuy + price), max(prevBuy, prevCooldown - price), max(prevCooldown, prevSell)
        return max(prevSell, prevCooldown)