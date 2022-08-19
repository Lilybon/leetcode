class Solution {
    public:
        bool wordBreak(string s, vector < string > & wordDict) {
            int n = s.size();
            vector < bool > dp(n + 1);
            dp[0] = true;
            for (int i = 1; i <= n; i++) {
                for (int j = 0; j < i; j++) {
                    if (dp[j] == true && find(wordDict.begin(), wordDict.end(), s.substr(j, i - j)) != wordDict.end()) {
                        dp[i] = true;
                        break;
                    }
                }
            }
            return dp.back();
        }
};