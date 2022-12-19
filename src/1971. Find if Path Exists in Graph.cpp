class Solution {
public:
    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {
        unordered_map<int, vector<int>> graph;
        for (auto& edge : edges) {
            int u = edge[0],
                v = edge[1];
            graph[u].push_back(v);
            graph[v].push_back(u);
        }
        
        vector<bool> seen(n);
        seen[source] = true;
        queue<int> nodeQueue;
        nodeQueue.push(source);
        
        while (!nodeQueue.empty()) {
            int currNode = nodeQueue.front();
            nodeQueue.pop();
            if (currNode == destination) {
                return true;
            }

            for (auto& nextNode : graph[currNode]) {
                if (!seen[nextNode]) {
                    seen[nextNode] = true;
                    nodeQueue.push(nextNode);
                }
            }
        }
        
        return false;
    }
};