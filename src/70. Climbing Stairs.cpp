class Solution {
public:
    int climbStairs(int n) {
        int ones = 1;
        int twos = 0;
        for (int i = 2; i <= n; ++i) {
            int sum = ones + twos;
            twos = ones;
            ones = sum;
        }
        return ones + twos;
    }
};