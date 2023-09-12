class Solution {
public:
    int minDeletions(string s) {
        int counts[26] = {0};
        for (auto c : s) {
            counts[c - 'a']++;
        }
        
        unordered_set<int> freq;
        int ans = 0;
        for (auto count : counts) {
            while (count > 0 && freq.count(count)) {
                count--;
                ans++;
            }
            if (count > 0) {
                freq.insert(count);
            }
        }
        return ans;
    }
};