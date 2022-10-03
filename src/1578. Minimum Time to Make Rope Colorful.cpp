class Solution {
public:
    int minCost(string colors, vector<int>& neededTime) {
        int n = colors.size(),
            ans = 0,
            i = 0,
            j = 0;
        while (i < n && j < n) {
            int maxTime = neededTime[i];
            while (j < n && colors[i] == colors[j]) {
                ans += neededTime[j];
                maxTime = max(maxTime, neededTime[j]);
                j++;
            }
            ans -= maxTime;
            i = j;
        }
        return ans;
    }
};