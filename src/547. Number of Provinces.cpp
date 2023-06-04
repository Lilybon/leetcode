// Union Find
// class Solution {
// private:
//     vector<int> uf;

//     void union_(int a, int b) {
//         int rootA = find(a), rootB = find(b);
//         if (rootA < rootB) {
//             uf[rootB] = rootA;
//         } else {
//             uf[rootA] = rootB;
//         }
//     }
//     int find(int x) {
//         if (uf[x] == x) {
//             return x;
//         }
//         uf[x] = find(uf[x]);
//         return uf[x];
//     }
// public:
//     int findCircleNum(vector<vector<int>>& isConnected) {
//         const int n = isConnected.size();
//         uf.resize(n);
//         for (int i = 0; i < n; ++i) {
//             uf[i] = i;
//         }

//         for (int i = 0; i < n; ++i) {
//             for (int j = 0; j < n; ++j) {
//                 if (isConnected[i][j]) {
//                     union_(i, j);
//                 }
//             }
//         }

//         int count = 0;
//         for (int i = 0; i < n; ++i) {
//             if (uf[i] == i) {
//                 count++;
//             }
//         }
//         return count;
//     }
// };

// DFS
// class Solution {
// private:
//     vector<bool> visited;
//     void dfs(vector<vector<int>>& isConnected, int i) {
//         visited[i] = true;
//         for (int j = 0; j < isConnected.size(); ++j) {
//             if (!visited[j] && isConnected[i][j]) {
//                 dfs(isConnected, j);
//             }
//         }
//     }
// public:
//     int findCircleNum(vector<vector<int>>& isConnected) {
//       const int n = isConnected.size();
//         visited.resize(n);
//         int count = 0;
//         for (int i = 0; i < n; ++i) {
//             if (!visited[i]) {
//                 count++;
//                 dfs(isConnected, i);
//             }
//         }
//         return count;
//     }
// };

// BFS
class Solution {
public:
    int findCircleNum(vector<vector<int>>& isConnected) {
        const int n = isConnected.size();

        vector<bool> visited(n);
        queue<int> q;
        int count = 0;
        for (int i = 0; i < n; ++i) {
            if (visited[i]) {
                continue;
            }
            count++;
            visited[i] = true;
            q.push(i);
            while (!q.empty()) {
                int j = q.front();
                q.pop();
                for (int k = 0; k < n; ++k) {
                    if (isConnected[j][k] && !visited[k]) {
                        visited[k] = true;
                        q.push(k);
                    }
                }
            }
        }
        return count;
    }
};