class Solution {
public:
    int numDecodings(string s) {
        int n = s.size();
        vector<int> dp(n + 1, 0);
        dp[0] = 1;
        dp[1] = s[0] == '0' ? 0 : 1;
        for (int i = 2; i <= n; ++i) {
            int combinedN = stoi(s.substr(i - 2, 2));
            if (s[i - 1] != '0') dp[i] += dp[i - 1];
            if (10 <= combinedN && combinedN <= 26) dp[i] += dp[i - 2];
            if (dp[i] == 0) return 0;
        }
        return dp[n];
    }
};