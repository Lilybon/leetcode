class Solution {
private:
    int pathCount = 0,
        moveCount = 1;
    void dfs(vector<vector<int>>& grid, int x, int y) {
        if (
            x < 0 ||
            x >= grid.size() ||
            y < 0 ||
            y >= grid[x].size() ||
            grid[x][y] < 0
        ) {
            return;
        }

        if (grid[x][y] == 2) {
            if (moveCount == 0) {
                pathCount++;
            }
            return;
        }

        grid[x][y] = -2;
        moveCount--;
        dfs(grid, x - 1, y);
        dfs(grid, x + 1, y);
        dfs(grid, x, y - 1);
        dfs(grid, x, y + 1);
        grid[x][y] = 0;
        moveCount++;
    }
public:
    int uniquePathsIII(vector<vector<int>>& grid) {
        int x, y;

        for (int i = 0; i < grid.size(); ++i) {
            for (int j = 0; j < grid[i].size(); ++j) {
                if (grid[i][j] == 0) {
                    moveCount++;
                } else if (grid[i][j] == 1) {
                    x = i;
                    y = j;
                }
            }
        }

        dfs(grid, x, y);

        return pathCount;
    }
};