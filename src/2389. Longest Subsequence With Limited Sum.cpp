class Solution {
public:
    vector<int> answerQueries(vector<int>& nums, vector<int>& queries) {
        sort(nums.begin(), nums.end());
        vector<int> results;
        for (auto &query : queries) {
            int i = 0;
            while (i < nums.size() && query >= nums[i]) {
                query -= nums[i];
                i++;
            }
            results.push_back(i);
        }
        return results;
    }
};