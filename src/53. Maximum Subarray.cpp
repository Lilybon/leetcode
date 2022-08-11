class Solution {
    public:
        int maxSubArray(vector < int > & nums) {
            int total_sum = INT_MIN;
            int current_sum = 0;
            for (int num: nums) {
                current_sum = max(current_sum + num, num);
                total_sum = max(total_sum, current_sum);
            }
            return total_sum;
        }
};