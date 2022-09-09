class Solution {
private:
    void breakIsland(vector<vector<char>>& grid, int i, int j) {
        int m = grid.size(),
            n = grid[0].size();
        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] == '0') return;
        grid[i][j] = '0';
        breakIsland(grid, i - 1, j);
        breakIsland(grid, i + 1, j);
        breakIsland(grid, i, j - 1);
        breakIsland(grid, i, j + 1);
    }
public:
    int numIslands(vector<vector<char>>& grid) {
        int m = grid.size(),
            n = grid[0].size(),
            count = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (grid[i][j] == '1') {
                    count++;
                    breakIsland(grid, i, j);
                }
            }
        }
        return count;
    }
};