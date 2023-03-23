class Solution {
private:
    vector<int> uf;
    int redundantEdge = 0;
    void union_(int a, int b) {
        int rootA = find(a),
            rootB = find(b);
        if (rootA == rootB) {
            redundantEdge++;
        }
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
    int makeConnected(int n, vector<vector<int>>& connections) {
        uf.resize(n);
        for (int i = 0; i < n; ++i) {
            uf[i] = i;
        }

        for (auto &connection : connections) {
            union_(connection[0], connection[1]);
        }

        int groupSize = 0;
        for (int i = 0; i < n; ++i) {
            groupSize += i == uf[i];
        }

        return redundantEdge >= groupSize - 1 ? groupSize - 1 : -1;
    }
};