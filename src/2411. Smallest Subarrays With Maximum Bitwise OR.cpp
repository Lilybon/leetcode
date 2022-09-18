class Solution {
public:
    vector<int> smallestSubarrays(vector<int>& nums) {
        int last[30] = {}, n = nums.size();
        vector<int> ans(n, 1);
        for (int i = n - 1; i >= 0; --i) {
            for (int j = 0; j < 30; ++j) {
                if (nums[i] & (1 << j)) last[j] = i;
                ans[i] = max(ans[i], last[j] - i + 1);
            }
        }
        return ans;
    }
};