class Solution {
private:
    int count = 0;
    vector<vector<pair<int, int>>> adj;
    void dfs(int parent, int node) {
        for (auto& [child, sign] : adj[node]) {
            if (parent != child) {
                count += sign;
                dfs(node, child);
            }
        }
    }
public:
    int minReorder(int n, vector<vector<int>>& connections) {
        adj.resize(n);
        for (auto &connection : connections) {
            adj[connection[0]].push_back({connection[1], 1});
            adj[connection[1]].push_back({connection[0], 0});
        }
        dfs(-1, 0);
        return count;
    }
};