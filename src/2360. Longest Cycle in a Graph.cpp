class Solution {
public:
    int longestCycle(vector<int>& edges) {
        const int n = edges.size();
        vector<bool> visited(n, false);
        int maxCyclePath = -1;
        for (int i = 0; i < edges.size(); ++i) {
            if (visited[i]) {
                continue;
            }
            unordered_map<int, int> paths;
            int distance = 0;
            for (int j = i; j != -1; j = edges[j]) {
                if (paths.find(j) != paths.end()) {
                    maxCyclePath = max(maxCyclePath, distance - paths[j]);
                    break;
                }
                if (visited[j]) {
                    break;
                }
                visited[j] = true;
                paths[j] = distance;
                distance++;
            }
        }
        return maxCyclePath;
    }
};