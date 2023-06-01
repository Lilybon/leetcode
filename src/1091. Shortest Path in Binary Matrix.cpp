class Solution {
public:
    int shortestPathBinaryMatrix(vector<vector<int>>& grid) {
        const int n = grid.size();
        if (grid[0][0] == 1 || grid[n - 1][n - 1] == 1) {
            return -1;
        }

        pair<int, int> directions[8] = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};
        vector<vector<bool>> visited(n, vector<bool>(n, false));
        queue<pair<int, int>> q;
        q.push({0, 0});
        visited[0][0] = true;
        int path = 1;
        while (!q.empty()) {
            int qSize = q.size();
            while (qSize--) {
                auto [x, y] = q.front();
                q.pop();
                if (x == n - 1 && y == n - 1) {
                    return path;
                }
                for (auto& [dx, dy] : directions) {
                    const int nextX = x + dx, nextY = y + dy;
                    if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < n && grid[nextX][nextY] == 0 && !visited[nextX][nextY]) {
                        visited[nextX][nextY] = true;
                        q.push({nextX, nextY});
                    }
                }
            }
            path++;
        }
        return -1;
    }
};