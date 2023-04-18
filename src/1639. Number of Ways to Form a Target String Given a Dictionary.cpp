class Solution {
public:
    int numWays(vector<string>& words, string target) {
        const int m = target.size(),
            k = words[0].size(),
            mod = 1e9 + 7;

        vector<vector<int>> counts(26, vector<int>(k, 0));
        for (auto& word : words) {
            for (int i = 0; i < k; ++i) {
                counts[word[i] - 'a'][i]++;
            }
        }

        vector<vector<long long>> dp(m + 1, vector<long long>(k + 1, 0));
        dp[0][0] = 1;
        for (int i = 0; i <= m; ++i) {
            for (int j = 0; j < k; ++j) {
                if (i < m) {
                    dp[i + 1][j + 1] += counts[target[i] - 'a'][j] * dp[i][j];
                    dp[i + 1][j + 1] %= mod;
                }
                dp[i][j + 1] += dp[i][j];
                dp[i][j + 1] %= mod;
            }
        }
        return dp[m][k];
    }
};