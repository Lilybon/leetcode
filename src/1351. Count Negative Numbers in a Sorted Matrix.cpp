class Solution {
public:
    int countNegatives(vector<vector<int>>& grid) {
        const int m = grid.size(), n = grid[0].size();
        int count = 0, j = n - 1;
        for (int i = 0; i < m; ++i) {
            int left = -1, right = j;
            lower_bound();
            count += n - 1 - j;
        }
        return count;
    }
};