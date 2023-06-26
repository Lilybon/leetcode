class Solution {
public:
    long long totalCost(vector<int>& costs, int k, int candidates) {
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
        for (int i = 0; i < candidates; ++i) {
            pq.push({costs[i], 0});
        }
        for (int i = max(candidates, (int) costs.size() - candidates); i < costs.size(); ++i) {
            pq.push({costs[i], 1});
        }

        int left = candidates;
        int right = costs.size() - 1 - candidates;
        long long ans = 0;
        for (int count = 0; count < k; ++count) {
            auto [cost, isRight] = pq.top(); 
            ans += cost;
            pq.pop();

            if (left <= right) {
                if (isRight) {
                    pq.push({costs[right], 1});
                    right--;
                } else {
                    pq.push({costs[left], 0});
                    left++;
                }
            }
        }
        return ans;
    }
};