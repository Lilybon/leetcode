// class Solution {
//     public:
//         int lengthOfLongestSubstring(string s) {
//             unordered_map < char, int > map;
//             int maxLength = 0;
//             int j = 0;
//             for (int i = 0; i < s.size(); ++i) {
//                 char c = s[i];
//                 if (map.find(c) != map.end()) {
//                     j = max(j, map[c] + 1);
//                 }
//                 maxLength = max(maxLength, i - j + 1);
//                 map[c] = i;
//             }
//             return maxLength;
//         }
// };

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        vector<int> m(128, -1);
        int res = 0, left = -1;
        for (int i = 0; i < s.size(); ++i) {
            left = max(left, m[s[i]]);
            m[s[i]] = i;
            res = max(res, i - left);
        }
        return res;
    }
};