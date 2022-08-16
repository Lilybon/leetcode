class Solution {
    public:
        int firstUniqChar(string s) {
            int n = s.size();
            int counts[26] = {
                0
            };
            for (int i = 0; i < n; i++) {
                counts[s[i] - 'a']++;
            }

            for (int i = 0; i < n; i++) {
                if (counts[s[i] - 'a'] == 1) {
                    return i;
                }
            }
            return -1;
        }
};