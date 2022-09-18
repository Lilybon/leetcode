class Solution {
public:
    long long minimumMoney(vector<vector<int>>& transactions) {
        long long sumOfLose = 0; int cashback = 0;
        for (auto& transaction : transactions) {
            cashback = max(cashback, min(transaction[0], transaction[1]));
            sumOfLose += max(transaction[0] - transaction[1], 0);
        }
        return sumOfLose + cashback;
    }
};