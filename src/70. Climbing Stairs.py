class Solution:
    def climbStairs(self, n: int) -> int:
        ones = 1
        twos = 0
        for _ in range(2, n + 1):
            ones, twos = ones + twos, ones
        return ones + twos