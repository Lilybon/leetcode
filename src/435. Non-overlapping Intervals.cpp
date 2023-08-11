class Solution {
public:
    int eraseOverlapIntervals(vector<vector<int>>& intervals) {
        sort(intervals.begin(), intervals.end(), [](vector<int>& a, vector<int>& b) {
            return a[1] < b[1];
        });

        int ans = 0;
        int k = INT_MIN;
        for (auto& itr : intervals) {
            const int start = itr[0];
            const int end = itr[1];
            if (start >= k) {
                k = end;
            } else {
                ans++;
            }
        }

        return ans;
    }
};