class Solution:
    def concatenatedBinary(self, n: int) -> int:
        MOD = 10 ** 9 + 7
        ans = 0
        for i in range(1, n + 1):
            ans = (ans * (1 << (len(bin(i)) - 2)) + i) % MOD
        return ans