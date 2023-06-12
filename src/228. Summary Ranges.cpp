class Solution {
private:
    string getValue(int start, int end) {
        return start == end
            ? to_string(start)
            : to_string(start) + "->" + to_string(end);
    }
public:
    vector<string> summaryRanges(vector<int>& nums) {
        vector<string> ans;

        if (nums.empty()) {
            return ans;
        }

        const int n = nums.size();
        int start = nums[0];
        for (int i = 1; i < n; ++i) {
            if (nums[i] != nums[i - 1] + 1) {
                ans.push_back(getValue(start, nums[i - 1]));
                start = nums[i];
            }
        }
        ans.push_back(getValue(start, nums[n - 1]));
        return ans;
    }
};