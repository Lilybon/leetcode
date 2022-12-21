class Solution {
private:
    bool bfs(int i, vector<vector<int>>& graph, unordered_map<int, bool>& group) {
        queue<int> peopleQueue;
        peopleQueue.push(i);
        group.insert({i, true});

        while (!peopleQueue.empty()) {
            int from = peopleQueue.front();
            peopleQueue.pop();
            for (auto to : graph[from]) {
                if (group.find(to) != group.end() && group[from] == group[to]) {
                    return false;
                }
                if (group.find(to) == group.end()) {
                    group.insert({to, !group[from]});
                    peopleQueue.push(to);
                }
            }
        }
        return true;
    }
public:
    bool possibleBipartition(int n, vector<vector<int>>& dislikes) {
        vector<vector<int>> graph(n + 1);
        for (auto& dislike : dislikes) {
            graph[dislike[0]].push_back(dislike[1]);
            graph[dislike[1]].push_back(dislike[0]);
        }

        unordered_map<int, bool> group;
        for (int i = 1; i <= n; ++i) {
            if (group.find(i) == group.end() && !bfs(i, graph, group)) {
                return false;
            }
        }
        return true;
    }
};