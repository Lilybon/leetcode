// DFS
// class Solution {
// public:
//     vector<int> findBall(vector<vector<int>>& grid) {
//         vector<int> ans(grid[0].size());
//         for (int i = 0; i < grid[0].size(); ++i) {
//             ans[i] = findBallDropCol(0, i, grid);
//         }
//         return ans;
//     }
    
//     int findBallDropCol(int row, int col, vector<vector<int>>& grid) {
//         if (row == grid.size()) {
//             return col;
//         }
//         int nextCol = col + grid[row][col];
//         if (nextCol < 0 ||
//             nextCol >= grid[0].size() ||
//             grid[row][col] != grid[row][nextCol]) {
//             return -1;
//         }
//         return findBallDropCol(row + 1, nextCol, grid);
//     }
// };

class Solution {
public:
    vector<int> findBall(vector<vector<int>>& grid) {
        vector<int> ans(grid[0].size());
        for (int col = 0; col < grid[0].size(); ++col) {
            int currentCol = col;
            for (int row = 0; row < grid.size(); ++row) {
                int nextCol = currentCol + grid[row][currentCol];
                if (nextCol < 0 ||
                    nextCol >= grid[0].size() ||
                    grid[row][currentCol] != grid[row][nextCol]) {
                    ans[col] = -1;
                    break;
                }
                ans[col] = currentCol = nextCol;
            }
        }
        return ans;
    }
};