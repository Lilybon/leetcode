class Solution {
public:
    int matchPlayersAndTrainers(vector<int>& players, vector<int>& trainers) {
        sort(players.begin(), players.end());
        sort(trainers.begin(), trainers.end());
        int ans = 0, j = 0;
        for (int i = 0; i < players.size(); ++i) {
            while (j < trainers.size() && trainers[j] < players[i]) j++;
            if (j == trainers.size()) break;
            ans++;
            j++;
        }
        return ans;
    }
};