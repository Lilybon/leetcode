class Solution {
private:
    bool isSame(int m1[26], int m2[26]) {
        for (int i = 0; i < 26; ++i) {
            if (m1[i] != m2[i]) {
                return false;
            }
        }
        return true;
    }
public:
    bool checkInclusion(string s1, string s2) {
        if (s1.size() > s2.size()) {
            return false;
        }

        int m1[26] = {0};
        for (auto& c : s1) {
            m1[c - 'a']++;
        }

        int m2[26] = {0};
        for (int i = 0; i < s1.size(); ++i) {
            m2[s2[i] - 'a']++;
        }

        if (isSame(m1, m2)) {
            return true;
        }

        for (int i = s1.size(); i < s2.size(); ++i) {
            m2[s2[i - s1.size()] - 'a']--;
            m2[s2[i] - 'a']++;
            if (isSame(m1, m2)) {
                return true;
            }
        }

        return false;
    }
};