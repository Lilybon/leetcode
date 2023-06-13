class Solution {
private:
    long getMinSum(int n, int index, int value) {
        long minSum = -value;
    
        if (value > index) {
            minSum += (long) (value + value - index) * (index + 1) / 2;
        } else {
            minSum += (long) value * (value + 1) / 2 + index - value + 1;
        }

        if (value >= n - index) {
            minSum += (long) (value + value - n + 1 + index) * (n - index) / 2;
        } else {
            minSum += (long) value * (value + 1) / 2 + n - index - value;
        }

        return minSum;
    }
public:
    int maxValue(int n, int index, int maxSum) {
        int left = 1, right = maxSum;
        while (left < right) {
            int mid = left + (right + 1 - left) / 2;
            if (getMinSum(n, index, mid) <= maxSum) {
                left = mid;
            } else {
                right = mid - 1;
            }
        }
        return left;
    }
};