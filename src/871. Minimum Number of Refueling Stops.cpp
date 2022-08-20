// DP
// class Solution {
//     public:
//         int minRefuelStops(int target, int startFuel, vector < vector < int >> & stations) {
//             int n = stations.size();
//             vector < long > dp(n + 1);
//             dp[0] = startFuel;
//             for (int i = 0; i < n; ++i) {
//                 for (int t = i; t >= 0; --t) {
//                     if (dp[t] >= stations[i][0]) {
//                         dp[t + 1] = max(dp[t + 1], dp[t] + stations[i][1]);
//                     }
//                 }
//             }
//             for (int i = 0; i <= n; ++i) {
//                 if (dp[i] >= target) {
//                     return i;
//                 }
//             }
//             return -1;
//         }
// };

// Max Heap
class Solution {
    public:
        int minRefuelStops(int target, int startFuel, vector < vector < int >> & stations) {
            int n = stations.size();
            priority_queue < int > priorityQueue;
            int curr = startFuel;
            int i = 0;
            int result = 0;
            while (curr < target) {
                while (i < n && curr >= stations[i][0]) {
                    priorityQueue.push(stations[i][1]);
                    i++;
                }
                if (priorityQueue.empty()) {
                    return -1;
                }
                int dist = priorityQueue.top();
                priorityQueue.pop();
                curr += dist;
                result++;
            }
            return result;
        }
};