class Solution {
private:
    vector<int> root;
    int findRoot (int i) {
        if (i != root[i]) {
            root[i] = findRoot(root[i]);
        }
        return root[i];
    }
    void unionRoot (int i, int j) {
        root[findRoot(j)] = findRoot(i);
    }
public:
    int removeStones(vector<vector<int>>& stones) {
        const int n = stones.size();
        root.resize(n);

        for (int i = 0; i < n; ++i) {
            root[i] = i;
        }

        for (int i = 0; i < n; ++i) {
            for (int j = i; j < n; ++j) {
                if (stones[i][0] == stones[j][0] || stones[i][1] == stones[j][1]) {
                    unionRoot(i, j);
                }
            }
        }
        
        int count = 0;
        for (int i = 0; i < n; ++i) {
            if (root[i] == i) {
                count++;
            }
        }
        
        return n - count;
    }
};