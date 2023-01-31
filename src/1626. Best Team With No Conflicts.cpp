class Solution {
public:
    int bestTeamScore(vector<int>& scores, vector<int>& ages) {
        const int n = scores.size();

        vector<pair<int, int>> ageScorePair(n);
        for (int i = 0; i < n; ++i) {
            ageScorePair[i] = {ages[i], scores[i]};
        }
        sort(ageScorePair.begin(), ageScorePair.end());

        vector<int> dp(n);
        for (int i = 0; i < n; ++i) {
            dp[i] = ageScorePair[i].second;
        }

        int ans = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = i - 1; j >= 0; --j) {
                if (ageScorePair[i].second >= ageScorePair[j].second) {
                    dp[i] = max(dp[i], ageScorePair[i].second + dp[j]);
                }
            }
            ans = max(ans, dp[i]);
        }
        
        return ans;
    }
};