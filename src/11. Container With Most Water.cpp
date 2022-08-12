class Solution {
    public:
        int maxArea(vector < int > & height) {
            int maxAmount = 0;
            int left = 0;
            int right = height.size() - 1;
            while (left < right) {
                int localMaxAmount = (right - left) * min(height[left], height[right]);
                maxAmount = max(maxAmount, localMaxAmount);
                if (height[left] > height[right]) {
                    right--;
                } else {
                    left++;
                }
            }
            return maxAmount;
        }
};