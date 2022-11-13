class Solution {
public:
    string reverseWords(string s) {
        reverse(s.begin(), s.end());

        int i = 0, j = 0;
        while (i < s.size()) {
            while (j < s.size() && s[j] != ' ') j++;
            reverse(s.begin() + i, s.begin() + j);
            while (j < s.size() && s[j] == ' ') j++;
            i = j;
        }

        i = 0, j = 0;
        while (i < s.size()) {
            bool newWord = false;
            while (i < s.size() && s[i] == ' ') {
                newWord = true;
                i++; 
            }
            if (i == s.size()) break;
            if (newWord && j > 0) s[j++] = ' ';
            s[j++] = s[i++];
        }

        return s.substr(0, j);
    }
};