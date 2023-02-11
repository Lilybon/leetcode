class Solution {
public:
    vector<int> shortestAlternatingPaths(int n, vector<vector<int>>& redEdges, vector<vector<int>>& blueEdges) {
        vector<vector<pair<int, int>>> adj(n);
        for (auto& redEdge : redEdges) {
            adj[redEdge[0]].push_back({redEdge[1], 0});
        }
        for (auto& blueEdge : blueEdges) {
            adj[blueEdge[0]].push_back({blueEdge[1], 1});
        }

        vector<int> ans(n, -1);
        ans[0] = 0;

        vector<vector<bool>> visited(n, vector<bool>(2));
        visited[0][1] = visited[0][0] = true;

        queue<vector<int>> q;
        q.push({0, 0, -1});

        while (!q.empty()) {
            auto element = q.front();
            int node = element[0],
              steps = element[1],
              prevColor = element[2];
            q.pop();

            for (auto& [neighbor, color] : adj[node]) {
                if (!visited[neighbor][color] && color != prevColor) {
                    visited[neighbor][color] = true;
                    q.push({neighbor, 1 + steps, color});
                    if (ans[neighbor] == -1) {
                        ans[neighbor] = 1 + steps;
                    }
                }
            }
        }
        return ans;
    }
};