class Solution {
public:
    vector<bool> kidsWithCandies(vector<int>& candies, int extraCandies) {
        int maxCandy = 0;
        for (auto candy : candies) {
            maxCandy = max(maxCandy, candy);
        }

        vector<bool> ans;
        for (auto candy : candies) {
            ans.push_back(candy + extraCandies >= maxCandy);
        }
        return ans;
    }
};