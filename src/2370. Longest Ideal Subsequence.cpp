class Solution {
    public:
        int longestIdealString(string s, int k) {
            int dp[26] = {};
            int maxCount = 0;
            for (char & c: s) {
                int i = c - 'a';
                int minIndex = max(i - k, 0);
                int maxIndex = min(i + k, 25);
                for (int j = minIndex; j <= maxIndex; ++j) {
                    dp[i] = max(dp[i], dp[j]);
                }
                maxCount = max(maxCount, ++dp[i]);
            }
            return maxCount;
        }
};