class Solution:
    def fib(self, n: int) -> int:
        if n == 0: return 0
        dp = (0,1)
        for _ in range(2, n + 1):
            dp = (dp[-1], dp[-1] + dp[-2])

        return dp[-1]