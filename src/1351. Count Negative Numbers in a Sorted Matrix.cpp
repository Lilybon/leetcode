class Solution {
public:
    int countNegatives(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        int count = 0, j = n - 1;
        for (int i = 0; i < m; ++i) {
            while (j >= 0 && grid[i][j] < 0) {
                j--;
            }
            count += n - 1 - j;
        }
        return count;
    }
};