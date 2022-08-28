class Solution {
public:
    vector<vector<int>> diagonalSort(vector<vector<int>>& mat) {
        int m = mat.size();
        int n = mat[0].size();
        unordered_map<int, priority_queue<int, vector<int>, greater<int>>> candidates;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int diff = i - j;
                candidates[diff].push(mat[i][j]);
            }
        }
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int diff = i - j;
                mat[i][j] = candidates[diff].top();
                candidates[diff].pop();
            }
        }
        return mat;
    }
};