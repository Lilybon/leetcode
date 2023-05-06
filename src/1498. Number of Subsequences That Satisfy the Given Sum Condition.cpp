class Solution {
public:
    int numSubseq(vector<int>& nums, int target) {
        const int n = nums.size(), mod = 1e9 + 7;

        vector<int> power(n);
        power[0] = 1;
        for (int i = 1; i < n; ++i) {
            power[i] = power[i - 1] * 2 % mod;
        }

        sort(nums.begin(), nums.end());
        int count = 0, left = 0, right = n - 1;
        while (left <= right) {
            if (nums[left] + nums[right] <= target) {
                count += power[right - left];
                count %= mod;
                left++;
            } else {
                right--;
            }
        }

        return count;
    }
};