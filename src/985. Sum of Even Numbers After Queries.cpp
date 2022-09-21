class Solution {
public:
    vector<int> sumEvenAfterQueries(vector<int>& nums, vector<vector<int>>& queries) {
        int S = 0;
        vector<int> ans;
        for (auto& num : nums) {
            if (num % 2 == 0)
                S += num;
        }
        for (auto& query : queries) {
            int val = query[0], i = query[1];
            if (nums[i] % 2 == 0)
                S -= nums[i];
            nums[i] += val;
            if (nums[i] % 2 == 0)
                S += nums[i];
            ans.push_back(S);
        }
        return ans;
    }
};