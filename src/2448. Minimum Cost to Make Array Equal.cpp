class Solution {
private:
    long long getCost(vector<int>& nums, vector<int>& cost, int value) {
        long long totalCost = 0;
        for (int i = 0; i < nums.size(); ++i) {
            totalCost += 1L * abs(nums[i] - value) * cost[i];
        }
        return totalCost;
    }
public:
    long long minCost(vector<int>& nums, vector<int>& cost) {
        long long ans = getCost(nums, cost, nums[0]);
        int left = *min_element(nums.begin(), nums.end());
        int right = *max_element(nums.begin(), nums.end());
        while (left < right) {
            int mid = left + (right - left) / 2;
            long long totalCost1 = getCost(nums, cost, mid);
            long long totalCost2 = getCost(nums, cost, mid + 1);
            ans = min(totalCost1, totalCost2);
            if (totalCost1 <= totalCost2) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return ans;
    }
};