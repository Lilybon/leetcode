// class Solution {
// public:
//     vector<int> shuffle(vector<int>& nums, int n) {
//         vector<int> ans(n * 2);
//         for (int i = 0; i < n; ++i) {
//             ans[2 * i] = nums[i];
//             ans[2 * i + 1] = nums[i + n];
//         }
//         return ans;
//     }
// };

class Solution {
public:
    vector<int> shuffle(vector<int>& nums, int n) {
        // Max nums[i] 1000 can represent as 1111101000 in binary.
        for (int i = n; i < 2 * n; ++i) {
            int secondNum = nums[i] << 10;
            nums[i - n] |= secondNum;
        }

        // '0000000000 1111111111' in binary.
        int allOnes = pow(2, 10) - 1;

        for (int i = n - 1; i >= 0; --i) {
            int firstNum = nums[i] & allOnes,
                secondNum = nums[i] >> 10;
            nums[2 * i] = firstNum;
            nums[2 * i + 1] = secondNum;
        }
        return nums;
    }
};