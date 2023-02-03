class Solution {
public:
    string convert(string s, int numRows) {
        if (numRows <= 1) {
            return s;
        }

        vector<string> zigzag(numRows);
        bool goDown = true;
        int currRow = 0;
        for (char c : s) {
            zigzag[currRow] += c;
            if (goDown && currRow != numRows - 1) {
                currRow++;
            } else if (goDown && currRow == numRows - 1) {
                goDown = false;
                currRow--;
            } else if (!goDown && currRow != 0) {
                currRow--;
            } else {
                goDown = true;
                currRow++;
            }
        }

        string ans;
        for (string z : zigzag) {
            ans += z;
        }
        return ans;
    }
};