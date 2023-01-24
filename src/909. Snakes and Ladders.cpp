class Solution {
public:
    int snakesAndLadders(vector<vector<int>>& board) {
        const int n = board.size(),
            CELL_VISITED = -2;

        queue<pair<int, int>> q;
        q.push({1, 0});
        board[n - 1][0] = CELL_VISITED;

        while (!q.empty()) {
            auto [curr, moves] = q.front();
            q.pop();

            if (curr == n * n) {
                return moves;
            }

            for (int next = curr + 1; next <= min(curr + 6, n * n); ++next) {
                int index = n * n - next,
                    row = index / n,
                    col = (n - 1 - row) % 2 ? index % n : n - 1 - index % n;
                if (board[row][col] == CELL_VISITED) {
                    continue;
                } else if (board[row][col] > 0) {
                    q.push({board[row][col], moves + 1});
                } else {
                    q.push({next, moves + 1});
                }
                board[row][col] = CELL_VISITED;
            }
        }
        return -1;
    }
};