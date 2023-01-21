class Solution {
public:
    vector<vector<int>> findSubsequences(vector<int>& nums) {
        set<vector<int>> ans;
        vector<int> sequence;
        function<void(int)> backtracking;
        backtracking = [&nums, &ans, &sequence, &backtracking](int index) {
            if (index == nums.size()) {
                if (sequence.size() >= 2) {
                    ans.insert(sequence);
                }
                return;
            }

            if (sequence.empty() || sequence.back() <= nums[index]) {
                sequence.push_back(nums[index]);
                backtracking(index + 1);
                sequence.pop_back();
            }
            backtracking(index + 1);
        };
        backtracking(0);
        return vector(ans.begin(), ans.end());
    }
};