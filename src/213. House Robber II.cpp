class Solution {
private:
    int robMax(vector<int>& nums, int start, int end) {
        int prev = 0;
        int curr = 0;
        for (int i = start; i <= end; ++i) {
            int tmp = curr;
            curr = max(curr, prev + nums[i]);
            prev = tmp;
        }
        return curr;
    }
public:
    int rob(vector<int>& nums) {
        int n = nums.size();
        if (n <= 0) return 0;
        if (n == 1) return nums[0];
        int plan0 = robMax(nums, 0, n - 2);
        int plan1 = robMax(nums, 1, n - 1);    
        return max(plan0, plan1);
    }
};