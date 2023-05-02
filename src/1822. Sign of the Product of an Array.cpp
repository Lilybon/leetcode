class Solution {
public:
    int arraySign(vector<int>& nums) {
        bool flag = true;
        for (auto num : nums) {
            if (num == 0) {
                return 0;
            } else if (num < 0) {
                flag = !flag;
            }
        }
        return flag ? 1 : -1;
    }
};