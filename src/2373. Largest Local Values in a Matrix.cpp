class Solution {
    public:
        vector < vector < int >> largestLocal(vector < vector < int >> & grid) {
            int n = grid.size();
            vector < vector < int >> results(n - 2, vector < int > (n - 2, 0));
            for (int i = 0; i < n - 2; ++i) {
                for (int j = 0; j < n - 2; ++j) {
                    int maxValue = INT_MIN;
                    for (int k = 0; k < 3; ++k) {
                        for (int l = 0; l < 3; ++l) {
                            maxValue = max(maxValue, grid[i + k][j + l]);
                        }
                    }
                    results[i][j] = maxValue;
                }
            }
            return results;
        }
};