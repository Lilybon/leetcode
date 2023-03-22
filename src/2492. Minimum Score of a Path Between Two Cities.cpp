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
    int minScore(int n, vector<vector<int>>& roads) {
        uf.resize(n + 1);
        for (int i = 1; i <= n; ++i) {
            uf[i] = i;
        }

        for (auto &road : roads) {
            union_(road[0], road[1]);
        }

        int group = find(1), minRoad = INT_MAX;
        for (auto &road : roads) {
            if (find(road[0]) == group) {
                minRoad = min(minRoad, road[2]);
            }
        }
        return minRoad;
    }
};