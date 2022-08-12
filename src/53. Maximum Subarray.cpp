class Solution {
    public:
        int maxSubArray(vector < int > & nums) {
            int maxSum = INT_MIN;
            int localMaxSum = 0;
            for (int num: nums) {
                localMaxSum = max(localMaxSum + num, num);
                maxSum = max(maxSum, localMaxSum);
            }
            return maxSum;
        }
};