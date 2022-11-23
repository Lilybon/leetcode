class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        bool rows[9][9] = {false}, cols[9][9] = {false}, boxes[9][9] = {false};
        for (int i = 0; i < board.size(); ++i) {
            for (int j = 0; j < board[i].size(); ++j) {
                if (board[i][j] != '.') {
                    int value = board[i][j] - '0' - 1,
                        k = i / 3 * 3 + j / 3;
                    if (rows[i][value] || cols[j][value] || boxes[k][value]) {
                        return false;
                    }
                    rows[i][value] = cols[j][value] = boxes[k][value] = true;
                }
            }
        }
        return true;
    }
};