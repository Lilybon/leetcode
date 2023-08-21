// class Solution {
// private:
//     bool isRepeated(string s, int n) {
//         for (int i = 0; i < n; ++i) {
//             for (int j = i + n; j < s.size(); j += n) {
//                 if (s[j] != s[j - n]) {
//                     return false;
//                 }
//             }
//         }
//         return true;
//     }

// public:
//     bool repeatedSubstringPattern(string s) {
//         for (int i = 2; s.size() / i >= 1; ++i) {
//             if (s.size() % i == 0 && isRepeated(s, s.size() / i)) {
//                return true;
//             }
//         }
//         return false;
//     }
// };

class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        const string t = s + s;
        return t.substr(1, t.size() - 2).find(s) != -1;
    }
};