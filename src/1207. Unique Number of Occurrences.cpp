class Solution {
public:
    bool uniqueOccurrences(vector<int>& arr) {
        int freq[2001] = {0};
        for (int value : arr) {
            freq[value + 1000] += 1;
        }
        unordered_set<int> freqSet;
        for (int count : freq) {
            if (count > 0) {
                if (freqSet.find(count) == freqSet.end()) {
                    freqSet.insert(count);
                } else {
                    return false;
                }
            }
        }
        return true;
    }
};