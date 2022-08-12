class Solution {
    public:
        int maxSubarraySumCircular(vector < int > & nums) {
            int totalSum = 0;
            int maxSum = INT_MIN;
            int localMaxSum = 0;
            int minSum = INT_MAX;
            int localMinSum = 0;
            for (int num: nums) {
                totalSum += num;
                localMaxSum = max(localMaxSum + num, num);
                maxSum = max(maxSum, localMaxSum);
                localMinSum = min(localMinSum + num, num);
                minSum = min(minSum, localMinSum);
            }
            return maxSum > 0 ?
                max(maxSum, totalSum - minSum) :
                maxSum;
        }
};