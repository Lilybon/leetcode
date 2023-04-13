class Solution {
public:
    void dfs(int x, int y, vector<vector<int>>& grid) {
        if (x < 0 || x >= grid.size() || y < 0 || y >= grid[0].size() || grid[x][y] == 0) {
            return;
        }

        grid[x][y] = 0;
        dfs(x + 1, y, grid);
        dfs(x - 1, y, grid);
        dfs(x, y + 1, grid);
        dfs(x, y - 1, grid);
    }

    int numEnclaves(vector<vector<int>>& grid) {
        int m = grid.size(),
            n = grid[0].size();

        for (int i = 0; i < m; ++i) {
            if (grid[i][0] == 1) {
                dfs(i, 0, grid);
            }
            if (grid[i][n - 1] == 1) {
                dfs(i, n - 1, grid);
            }
        }

        for (int i = 0; i < n; ++i) {
            if (grid[0][i] == 1) {
                dfs(0, i, grid);
            }
            if (grid[m - 1][i] == 1) {
                dfs(m - 1, i,  grid);
            }
        }

        int count = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    count++;
                }
            }
        }
        return count;
    }
};