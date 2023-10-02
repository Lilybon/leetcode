class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        dp = [0] * 200001
        for i in range(len(questions) - 1, -1, -1):
            dp[i] = max(dp[i + 1], dp[questions[i][1] + i + 1] + questions[i][0])
        return dp[0]