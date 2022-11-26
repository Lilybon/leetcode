// class Solution {
// public:
//     static bool comp(array<int, 3>& a, array<int, 3>& b) {
//         return a[1] < b[1];
//     }
//     int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
//         int n = startTime.size();

//         vector<array<int, 3>> jobs;
//         for (int i = 0; i < n; ++i) {
//             jobs.push_back({startTime[i], endTime[i], profit[i]});
//         }
//         sort(jobs.begin(), jobs.end(), comp);
        
//         int maxProfit = 0;
//         map<int, int> dp;
//         for (int i = 0; i < n; ++i) {
//             auto itr = dp.upper_bound(jobs[i][0]);
//             int prevMaxProfit = itr == dp.begin() ? 0 : prev(itr, 1)->second;
//             dp[jobs[i][1]] = maxProfit = max(maxProfit, prevMaxProfit + jobs[i][2]);
//         }
        
//         return maxProfit;
//     }
// };

class Solution {
public:
    static bool comp(array<int, 3>& a, array<int, 3>& b) {
        return a[1] < b[1];
    }
    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {
        int n = startTime.size();

        vector<array<int, 3>> jobs;
        for (int i = 0; i < n; ++i) {
            jobs.push_back({startTime[i], endTime[i], profit[i]});
        }
        sort(jobs.begin(), jobs.end(), comp);
        
        vector<pair<int, int>> dp;
        int maxProfit = 0;
        dp.push_back({-1, 0});
        for (int i = 0; i < n; ++i) {
            auto itr = upper_bound(dp.begin(), dp.end(), make_pair(jobs[i][0], INT_MAX));
            maxProfit = max(maxProfit, prev(itr, 1)->second + jobs[i][2]);
            dp.push_back({jobs[i][1], maxProfit});
        }
        
        return maxProfit;
    }
};