class Solution {
public:
    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k) {
        vector<vector<pair<int, int>>> adj(n);
        for (auto& f : flights) {
            adj[f[0]].push_back({f[1], f[2]});
        }

        vector<int> prices(n, INT_MAX);
        queue<pair<int, int>> q;
        q.push({src, 0});
        int stops = 0;
        while (stops <= k && !q.empty()) {
            int sz = q.size();
            while (sz--) {
                auto [node, totalPrice] = q.front();
                q.pop();
                for (auto& [nextNode, nextPrice] : adj[node]) {
                    if (nextPrice + totalPrice >= prices[nextNode]) {
                        continue;
                    }
                    prices[nextNode] = nextPrice + totalPrice;
                    q.push({nextNode, prices[nextNode]});
                }
            }
            stops++;
        }

        return prices[dst] == INT_MAX ? -1 : prices[dst];
    }
};