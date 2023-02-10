class Solution {
public:
    int maxDistance(vector<vector<int>>& grid) {
        const int n = grid.size();
        queue<pair<int, int>> q;
        for (int x = 0; x < n; ++x) {
            for (int y = 0; y < n; ++y) {
                if (grid[x][y] == 1) {
                    q.push({x, y});
                }
            }
        }

        int ans = -1;
        const pair<int, int> directions[4] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        while (!q.empty()) {
            int qSize = q.size();
            while (qSize--) {
                auto [x, y] = q.front();
                q.pop();
                for (auto [dx, dy] : directions) {
                    int nextX = x + dx,
                        nextY = y + dy;
                    if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && grid[nextX][nextY] == 0) {
                        grid[nextX][nextY] = 1;
                        q.push({nextX, nextY});
                    }
                }
            }
            ans++;
        }

        return ans == 0 ? -1 : ans;
    }
};