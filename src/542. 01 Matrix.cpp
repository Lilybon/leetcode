class Solution {
public:
    vector<vector<int>> updateMatrix(vector<vector<int>>& mat) {
        const int m = mat.size();
        const int n = mat[0].size();
        vector<vector<int>> ans(m, vector<int>(n, -1));
        
        int level = 0;
        queue<pair<int, int>> q;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                if (mat[i][j] == 0) {
                    q.push({i, j});
                    ans[i][j] = level;
                }
            }
        }

        const pair<int, int> dirs[4] = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
        while (!q.empty()) {
            for (int count = q.size(); count > 0; --count) {
                auto [i, j] = q.front();
                q.pop();
                for (auto& [di, dj] : dirs) {
                    const int nextI = i + di;
                    const int nextJ = j + dj;
                    if (
                        nextI >= 0 &&
                        nextI < m &&
                        nextJ >= 0 &&
                        nextJ < n &&
                        ans[nextI][nextJ] == -1
                    ) {
                        ans[nextI][nextJ] = level + 1;
                        q.push({nextI, nextJ});
                    }
                }
            }
            level++;
        }

        return ans;
    }
};