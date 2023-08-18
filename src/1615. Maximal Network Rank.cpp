class Solution {
public:
    int maximalNetworkRank(int n, vector<vector<int>>& roads) {
        int maxRank = 0;
        unordered_map<int, unordered_set<int>> adj;

        for (auto& r : roads) {
            adj[r[0]].insert(r[1]);
            adj[r[1]].insert(r[0]);
        }

        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int rank = adj[i].size() + adj[j].size() - (adj[i].find(j) != adj[i].end());
                maxRank = max(maxRank, rank);
            }
        }

        return maxRank;
    }
};