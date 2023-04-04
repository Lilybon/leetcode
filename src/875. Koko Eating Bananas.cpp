class Solution {
public:
    int minEatingSpeed(vector<int>& piles, int h) {
        int left = 1, right = 1e9;
        while (left < right) {
            int middle = left + (right - left) / 2,
                totalHours = 0;
            for (auto &pile : piles) {
                totalHours += (pile + middle - 1) / middle;
            }
            if (totalHours > h) {
                left = middle + 1;
            } else {
                right = middle;
            }
        }
        return left;
    }
};