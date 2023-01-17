class Solution {
public:
    int minFlipsMonoIncr(string s) {
        int flip0 = 0,
            flip1 = 0;
        for (char c : s) {
            if (c == '0') {
                flip1 = min(flip1 + 1, flip0);
            } else {
                flip0 += 1;
            }
        }
        return min(flip0, flip1);
    }
};