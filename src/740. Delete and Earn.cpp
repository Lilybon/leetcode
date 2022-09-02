class Solution {
public:
    int deleteAndEarn(vector<int>& nums) {
        int n = 10001;
        vector<int> counts(n);
        for (auto &num : nums)
            counts[num] += num;
        int take = 0;
        int skip = 0;
        for (auto &count : counts) {
            int nextTake = skip + count;
            int nextSkip = max(skip, take);
            take = nextTake;
            skip = nextSkip;
        }
        return max(take, skip);
    }
};