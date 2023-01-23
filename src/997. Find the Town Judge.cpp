class Solution {
public:
    int findJudge(int n, vector<vector<int>>& trust) {
        vector<int> vote(n + 1, 0);
        for (auto& itr : trust) {
            vote[itr[0]]--;
            vote[itr[1]]++;
        }

        for (int i = 1; i <= n; ++i) {
            if (vote[i] == n - 1) {
                return i;
            }
        }
        return -1;
    }
};