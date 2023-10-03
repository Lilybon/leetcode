class Solution {
public:
    int numIdenticalPairs(vector<int>& nums) {
        int counts[101] = {};
        for (auto v : nums) {
            counts[v]++;
        }

        int pair = 0;
        for (auto count : counts) {
            pair += count * (count - 1) / 2;
        }
        return pair;
    }
};