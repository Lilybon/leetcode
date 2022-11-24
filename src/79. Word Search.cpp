class Solution {
private:
    bool search(vector<vector<char>>& board, string& word, int row, int col, int index) {
        if (index == word.size()) return true;
        if (
            row < 0 ||
            row >= board.size() ||
            col < 0 ||
            col >= board[0].size() ||
            board[row][col] != word[index]
        ) return false;
        char value = board[row][col];
        board[row][col] = '@';
        bool found = search(board, word, row - 1, col, index + 1) ||
            search(board, word, row + 1, col, index + 1) ||
            search(board, word, row, col - 1, index + 1) ||
            search(board, word, row, col + 1, index + 1);
        board[row][col] = value;
        return found;
    }
public:
    bool exist(vector<vector<char>>& board, string word) {
        for (int i = 0; i < board.size(); ++i) {
            for (int j = 0; j < board[i].size(); ++j) {
                if (search(board, word, i, j, 0)) return true;
            }
        }
        return false;
    }
};