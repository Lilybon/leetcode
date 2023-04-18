class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        const int n = max(word1.size(), word2.size());
        string ans;
        for (int i = 0; i < n; ++i) {
            if (i < word1.size()) {
                ans.push_back(word1[i]);
            }
            if (i < word2.size()) {
                ans.push_back(word2[i]);
            }
        }
        return ans;
    }
};