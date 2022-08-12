class Solution {
    public:
        int maxSubarraySumCircular(vector < int > & nums) {
            int total_sum = 0;
            int max_sum = INT_MIN;
            int current_max_sum = 0;
            int min_sum = INT_MAX;
            int current_min_sum = 0;
            for (int num: nums) {
                total_sum += num;
                current_max_sum = max(current_max_sum + num, num);
                max_sum = max(max_sum, current_max_sum);
                current_min_sum = min(current_min_sum + num, num);
                min_sum = min(min_sum, current_min_sum);
            }
            return max_sum > 0 ?
                max(max_sum, total_sum - min_sum) :
                max_sum;
        }
};