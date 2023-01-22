// Backtracking
// class Solution {
// private:
//     bool isPalindrome(string& s) {
//         int n = s.size();
//         for (int i = 0; i < n / 2; ++i) {
//             if (s[i] != s[n - 1 - i]) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     void backtracking(string& s, vector<vector<string>>& ans, vector<string>& row, int start) {
//         if (start == s.size()) {
//             ans.push_back(row);
//             return;
//         }

//         string slice;
//         for (int i = start; i < s.size(); ++i) {
//             slice += s[i];
//             if (isPalindrome(slice)) {
//                 row.push_back(slice);
//                 backtracking(s, ans, row, i + 1);
//                 row.pop_back();
//             }
//         }
//     }


// public:
//     vector<vector<string>> partition(string s) {
//         vector<vector<string>> ans;
//         vector<string> row;
//         backtracking(s, ans, row, 0);
//         return ans;
//     }
// };

// Backtracking + DP
class Solution {
private:
    void backtracking(string& s, vector<vector<string>>& ans, vector<string>& row, vector<vector<bool>>& dp, int start) {
        if (start == s.size()) {
            ans.push_back(row);
            return;
        }

        for (int end = start; end < s.size(); ++end) {
            if (s[start] == s[end] && (end - start <= 2 || dp[start + 1][end - 1])) {
                dp[start][end] = true;
                string slice = s.substr(start, end - start + 1);
                row.push_back(slice);
                backtracking(s, ans, row, dp, end + 1);
                row.pop_back();
            }
        }
    }
public:
    vector<vector<string>> partition(string s) {
        int n = s.size();
        vector<vector<string>> ans;
        vector<string> row;
        vector<vector<bool>> dp(n, vector<bool>(n, false));
        backtracking(s, ans, row, dp, 0);
        return ans;
    }
};