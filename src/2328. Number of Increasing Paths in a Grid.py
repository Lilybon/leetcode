# DP + DFS 
class Solution:
    def countPaths(self, grid: List[List[int]]) -> int:
        MOD = 10 ** 9 + 7
        m = len(grid)
        n = len(grid[0])
        dp = [[None] * n for _ in range(m)]
        ans = 0

        def dfs (x: int, y: int, prev_cell: int) -> int:
            if x < 0 or x >= m or y < 0 or y >= n or prev_cell >= grid[x][y]:
                return 0
            if dp[x][y] is not None:
                return dp[x][y]
            dp[x][y] = (
                1 +
                dfs(x - 1, y, grid[x][y]) +
                dfs(x + 1, y, grid[x][y]) +
                dfs(x, y - 1, grid[x][y]) +
                dfs(x, y + 1, grid[x][y])
            ) % MOD
            return dp[x][y]

        for i in range(m):
            for j in range(n):
                ans = (ans + dfs(i, j, 0)) % MOD
        return ans