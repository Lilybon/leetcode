class Solution {
private:
    vector<int> uf;
    void union_(int a, int b) {
        int rootA = find(a),
            rootB = find(b);
        if (rootA < rootB) {
            uf[rootB] = rootA;
        } else {
            uf[rootA] = rootB;
        }
    }
    int find(int x) {
        if (uf[x] == x) {
            return x;
        }
        uf[x] = find(uf[x]);
        return uf[x];
    }
public:
    long long countPairs(int n, vector<vector<int>>& edges) {
        uf.resize(n);
        for (int i = 0; i < n; ++i) {
            uf[i] = i;
        }
        
        for (auto &edge : edges) {
            union_(edge[0], edge[1]);
        }
        
        vector<long long> nodeCounts(n, 0);
        for (int i = 0; i < n; ++i) {
            nodeCounts[find(uf[i])]++;
        }
        long long totalEdgeCount = 0;
        int totalNodeCount = 0;
        for (auto nodeCount : nodeCounts) {
            totalNodeCount += nodeCount;
            totalEdgeCount += nodeCount * (n - totalNodeCount);
        }
        return totalEdgeCount;
    }
};