class Solution:
    def minExtraChar(self, s: str, dictionary: List[str]) -> int:
        dp = [0] * (len(s) + 1)
        for i in range(1, len(s) + 1):
            dp[i] = dp[i - 1] + 1
            for c in dictionary:
                if i - len(c) >= 0 and s[i - len(c):i] == c:
                    dp[i] = min(dp[i], dp[i - len(c)])
        return dp[-1]