class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        int n = nums.size();
        int sum = 0;
        int leftSum = 0;
        for (auto &num : nums) 
            sum += num;
        for (int i = 0; i < n; ++i) {
            if (leftSum == sum - leftSum - nums[i]) return i;
            leftSum += nums[i];
        }
        return -1;
    }
};