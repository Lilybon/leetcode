class Solution {
public:
    int closedIsland(vector<vector<int>>& grid) {
        int count = 0;
        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[0].size(); ++j) {
                if (grid[i][j] == 0 && dfs(i, j, grid)) {
                    count++;
                }
            }
        }
        return count;
    }

    bool dfs(int x, int y, vector<vector<int>>& grid) {
        if (x == -1 || x == grid.size() || y == -1 || y == grid[0].size()) {
            return false;
        }

        if (grid[x][y] == 1 || grid[x][y] == 2) {
            return true;
        }

        grid[x][y] = 2;

        bool isClosed = true;
        int dx[4] = {1, -1, 0, 0};
        int dy[4] = {0, 0, 1, -1};
        for (int i = 0; i < 4; ++i) {
            if (!dfs(x + dx[i], y + dy[i], grid)) {
                isClosed = false;
            }
        }
        return isClosed;
    }
};