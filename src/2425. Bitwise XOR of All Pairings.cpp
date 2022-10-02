class Solution {
public:
    int xorAllNums(vector<int>& nums1, vector<int>& nums2) {
        int x = 0, y = 0;
        for (int num : nums1)
            x ^= num;
        for (int num : nums2)
            y ^= num;
        return (nums1.size() % 2 * y) ^ (nums2.size() % 2 * x);
    }
};