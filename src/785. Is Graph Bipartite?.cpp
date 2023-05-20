class Solution {
public:
    bool isBipartite(vector<vector<int>>& graph) {
    const int n = graph.size();

    vector<int> color(n, 0);
    queue<int> q;
    for (int i = 0; i < n; ++i) {
        if (color[i]) {
            continue;
        }
        color[i] = 1;
        q.push(i);
        while (!q.empty()) {
            int node = q.front();
            q.pop();
            for (int neighbor : graph[node]) {
                if (!color[neighbor]) {
                    color[neighbor] = -color[node];
                    q.push(neighbor);
                } else if (color[neighbor] == color[node]) {
                    return false;
                }
            }
        }
    }
    
    return true;
  }
};