class Solution {
public:
    vector<vector<int>> findWinners(vector<vector<int>>& matches) {
        int lossesCount[100001];
        fill_n(lossesCount, 100001, -1);
        for (auto& match : matches) {
            int winner = match[0],
                loser = match[1];
            if (lossesCount[winner] == -1) {
                lossesCount[winner] = 0;
            }
            if (lossesCount[loser] == -1) {
                lossesCount[loser] = 1;
            } else {
                lossesCount[loser]++;
            }
        }
        vector<vector<int>> ans(2, vector<int>());
        for (int i = 0; i < 100001; ++i) {
            if (lossesCount[i] == 0) {
                ans[0].push_back(i);
            } else if (lossesCount[i] == 1) {
                ans[1].push_back(i);
            }
        }
        return ans;
    }
};