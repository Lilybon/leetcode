class Solution {
    public:
        int lengthOfLongestSubstring(string s) {
            unordered_map < char, int > map;
            int maxLength = 0;
            int j = 0;
            for (int i = 0; i < s.size(); ++i) {
                char c = s[i];
                if (map.find(c) != map.end()) {
                    j = max(j, map[c] + 1);
                }
                maxLength = max(maxLength, i - j + 1);
                map[c] = i;
            }
            return maxLength;
        }
};