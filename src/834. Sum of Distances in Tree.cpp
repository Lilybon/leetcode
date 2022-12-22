class Solution {
private:
    vector<unordered_set<int>> graph;
    vector<int> ans, count;

    void dfs(int node, int parent) {
        for (auto child : graph[node]) {
            if (child != parent) {
                dfs(child, node);
                count[node] += count[child];
                ans[node] += ans[child] + count[child];
            }
        }
    }

    void dfs2(int node, int parent) {
        for (auto child : graph[node]) {
            if (child != parent) {
                ans[child] = ans[node] - count[child] + graph.size() - count[child];
                dfs2(child, node);
            }
        }
    }

public:
    vector<int> sumOfDistancesInTree(int n, vector<vector<int>>& edges) {
        graph.resize(n);
        ans.assign(n, 0);
        count.assign(n, 1);

        for (auto edge : edges) {
            graph[edge[0]].insert(edge[1]);
            graph[edge[1]].insert(edge[0]);
        }
        dfs(0, -1);
        dfs2(0, -1);
        return ans;
    }
};