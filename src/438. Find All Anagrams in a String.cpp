class Solution {
private:
    bool isSame(int a[26], int b[26]) {
        for (int i = 0; i < 26; ++i) {
            if (a[i] != b[i]) {
                return false;
            }
        }
        return true;
    }
public:
    vector<int> findAnagrams(string s, string p) {
        vector<int> ans;
        if (p.size() > s.size()) {
            return ans;
        }

        int mp[26] = {0};
        for (char c : p) {
            mp[c - 'a']++;
        }

        int ms[26] = {0};
        for (int i = 0; i < p.size(); ++i) {
            ms[s[i] - 'a']++;
        }

        if (isSame(mp, ms)) {
            ans.push_back(0);
        }

        for (int i = p.size(); i < s.size(); ++i) {
            ms[s[i - p.size()] - 'a']--;
            ms[s[i] - 'a']++;
            if (isSame(mp, ms)) {
                ans.push_back(i - p.size() + 1);
            }
        }

        return ans;
    }
};