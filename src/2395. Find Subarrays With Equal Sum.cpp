class Solution {
public:
    bool findSubarrays(vector<int>& nums) {
        int n = nums.size();
        set<int> existed;
        for (int i = 1; i < n; ++i) {
            int sum = nums[i] + nums[i - 1];
            if (existed.count(sum)) return true;
            existed.insert(sum);
        }
        return false;
    }
};