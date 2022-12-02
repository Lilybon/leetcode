class Solution {
public:
    bool closeStrings(string word1, string word2) {
        int count1[26] = {0},
            count2[26] = {0};
        for (char c : word1) {
            count1[c - 'a']++;
        }
        for (char c : word2) {
            count2[c - 'a']++;
        }
        for (int i = 0; i < 26; i++) {
            if (count1[i] && !count2[i] || !count1[i] && count2[i]) {
                return false;
            }
        }
        sort(count1, count1 + 26);
        sort(count2, count2 + 26);
        for (int i = 0; i < 26; i++) {
            if (count1[i] != count2[i]) {
                return false;
            }
        }
        return true;
    }
};