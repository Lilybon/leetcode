class Solution {
public:
    int commonFactors(int a, int b) {
        int ans = 1,
            hi = gcd(a, b);
        for (int i = 2; i <= hi; ++i) {
            ans += a % i == 0 && b % i == 0;
        }
        return ans;
    }
};