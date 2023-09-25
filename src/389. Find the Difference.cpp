class Solution {
public:
    char findTheDifference(string s, string t) {
        char ans = 0;
        for (auto c : s + t) {
            ans ^= c;
        }
        return ans;
    }
};