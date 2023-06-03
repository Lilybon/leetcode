class Solution {
public:
    int numOfMinutes(int n, int headID, vector<int>& manager, vector<int>& informTime) {
        vector<vector<int>> graph(n, vector<int>());
        for (int i = 0; i < n; ++i) {
            if (manager[i] != -1) {
                graph[manager[i]].push_back(i);
            }
        }

        int ans = 0;
        queue<pair<int, int>> q;
        q.push({headID, 0});
        while (!q.empty()) {
            auto [id, time] = q.front();
            q.pop();
            const int nextTime = time + informTime[id];
            ans = max(ans, nextTime);
            for (auto nextId : graph[id]) {
                q.push({nextId, nextTime});
            }
        }
        return ans;
    }
};