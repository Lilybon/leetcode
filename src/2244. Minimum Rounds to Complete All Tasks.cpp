class Solution {
public:
    int minimumRounds(vector<int>& tasks) {
        unordered_map<int, int> freq;
        for (int task : tasks) {
            freq[task]++;
        }

        int minimumRounds = 0;
        for (auto [task, count] : freq) {
            if (count == 1) {
                return -1; 
            }
            minimumRounds += count / 3 + (count % 3 ? 1 : 0);
        }
        return minimumRounds;
    }
};