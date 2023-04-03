// class Solution {
// public:
//     int mincostTickets(vector<int>& days, vector<int>& costs) {
//         unordered_set<int> travel(days.begin(), days.end());
//         int dp[366] = {};
//         for (int day = days.front(); day <= days.back(); ++day) {
//             if (travel.find(day) == travel.end()) {
//                 dp[day] = dp[day - 1];
//             } else {
//                 dp[day] = min({
//                     dp[day - 1] + costs[0],
//                     dp[max(day - 7, 0)] + costs[1],
//                     dp[max(day - 30, 0)] + costs[2]
//                 });
//             }
//         }
//         return dp[days.back()];
//     }
// };

// class Solution {
// public:
//     int mincostTickets(vector<int>& days, vector<int>& costs) {
//         unordered_set<int> travel(days.begin(), days.end());
//         int dp[30] = {};
//         for (int day = days.front(); day <= days.back(); ++day) {
//             if (travel.find(day) == travel.end()) {
//                 dp[day % 30] = dp[(day - 1) % 30];
//             } else {
//                 dp[day % 30] = min({
//                     dp[(day - 1) % 30] + costs[0],
//                     dp[max(day - 7, 0) % 30] + costs[1],
//                     dp[max(day - 30, 0) % 30] + costs[2]
//                 });
//             }
//         }
//         return dp[days.back() % 30];
//     }
// };

class Solution {
public:
    int mincostTickets(vector<int>& days, vector<int>& costs) {
        queue<pair<int, int>> last7, last30;
        int cost = 0;
        for (auto day : days) {
            while (!last7.empty() && last7.front().first + 7 <= day) {
                last7.pop();
            }
            while (!last30.empty() && last30.front().first + 30 <= day) {
                last30.pop();
            }
            last7.push({day, cost + costs[1]});
            last30.push({day, cost + costs[2]});
            cost = min({
                cost + costs[0],
                last7.front().second,
                last30.front().second
            });
        }
        return cost;
    }
};