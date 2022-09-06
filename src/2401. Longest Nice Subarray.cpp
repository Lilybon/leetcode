class Solution {
public:
    int longestNiceSubarray(vector<int>& nums) {
        int j = 0, used = 0, res = 0;
        for (int i = 0; i < nums.size(); ++i) {
            while (used & nums[i]) {
                used ^= nums[j];
                j++;
            }
            used |= nums[i];
            res = max(res, i - j + 1);
        }
        return res;
    }
};