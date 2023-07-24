class Solution {
public:
    double myPow(double x, int n) {
        if (n == 0) {
            return 1;
        }

        if (n < 0) {
            n = -1 * n;
            x = 1.0 / x;
        }

        double ans = 1;
        while (n) {
            if (n % 2 == 1) {
                ans *= x;
                n--;
            }

            x *= x;
            n /= 2;
        }

        return ans;
    }
};