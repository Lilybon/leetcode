class Solution {
private:
    void dfs(vector<vector<int>>& graph, vector<vector<int>>& paths, vector<int> path, int index) {
        path.push_back(index);
        if (index == graph.size() - 1) {
            paths.push_back(path);
            return;
        }
        for (int nextIndex : graph[index]) {
            dfs(graph, paths, path, nextIndex);
        }
        path.pop_back();
    }
public:
    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {
        vector<vector<int>> paths;
        vector<int> path;
        dfs(graph, paths, path, 0);
        return paths;
    }
};