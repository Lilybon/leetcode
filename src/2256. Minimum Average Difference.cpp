class Solution {
public:
    int minimumAverageDifference(vector<int>& nums) {
        int n = nums.size();

        long long rightSum = 0,
            leftSum = 0;
        for (int i = 0; i < n; ++i) {
            rightSum += nums[i];
        }

        int minAvgIndex = 0,
            minAvgDiff = INT_MAX;
        for (int i = 0; i < n; ++i) {
            leftSum += nums[i];
            rightSum -= nums[i];
            int leftAverage = leftSum / (i + 1),
                rightAverage = i == n - 1
                    ? 0
                    : rightSum / (n - 1 - i),
                avgDiff = abs(leftAverage - rightAverage);
            if (avgDiff < minAvgDiff) {
                minAvgIndex = i;
                minAvgDiff = avgDiff;
            }
        }

        return minAvgIndex;
    }
};