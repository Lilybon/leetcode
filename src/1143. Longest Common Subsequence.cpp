// class Solution {
// public:
//     int longestCommonSubsequence(string text1, string text2) {
//         short dp[1000][1000] = {};
//         for (short i = 0; i < text1.size(); ++i) {
//             for (short j = 0; j < text2.size(); ++j) {
//                 dp[i + 1][j + 1] = text1[i] == text2[j]
//                     ? dp[i][j] + 1
//                     : max(dp[i + 1][j], dp[i][j + 1]);
//             }
//         }
//         return dp[text1.size()][text2.size()];
//     }
// };

class Solution {
public:
    int longestCommonSubsequence(string text1, string text2) {
        short dp[2][1000] = {};
        for (short i = 0; i < text1.size(); ++i) {
            for (short j = 0; j < text2.size(); ++j) {
                bool row = i % 2;
                dp[!row][j + 1] = text1[i] == text2[j]
                    ? dp[row][j] + 1
                    : max(dp[!row][j], dp[row][j + 1]);
            }
        }
        return dp[text1.size() % 2][text2.size()];
    }
};