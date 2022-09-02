class Solution {
public:
    int dominantIndex(vector<int>& nums) {
        int n = nums.size();
        if (n <= 1) return -1;
        int first = nums[0] >= nums[1] ? 0 : 1;
        int second = nums[0] >= nums[1] ? 1 : 0;
        for (int i = 2; i < n; ++i) {
            if (nums[i] > nums[first]) {
                second = first;
                first = i;
            } else if (nums[i] > nums[second]) {
                second = i;
            }
        }
        return nums[first] >= nums[second] * 2 ? first : -1;
    }
};