class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        m = len(grid)
        n = len(grid[0])
        count = 0
        for i in range(m):
            for j in range(n):
                if grid[i][j] == '1':
                    self.breakIsland(grid, i, j)
                    count += 1
        return count

    def breakIsland(self, grid: List[List[str]], i: int, j: int):
        m = len(grid)
        n = len(grid[0])
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == '0':
            return
        grid[i][j] = '0'
        self.breakIsland(grid, i + 1, j)
        self.breakIsland(grid, i - 1, j)
        self.breakIsland(grid, i, j + 1)
        self.breakIsland(grid, i, j - 1)