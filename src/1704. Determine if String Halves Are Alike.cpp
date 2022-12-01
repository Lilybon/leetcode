class Solution {
private:
    bool isVowel(char c) {
        return c == 'a' ||
            c == 'e' ||
            c == 'i' ||
            c == 'o' ||
            c == 'u' ||
            c == 'A' ||
            c == 'E' ||
            c == 'I' ||
            c == 'O' ||
            c == 'U';
    }
public:
    bool halvesAreAlike(string s) {
        int n = s.size(),
            countFromStart = 0,
            countFromEnd = 0;
        for (int i = 0; i < n / 2; i++) {
            countFromStart += isVowel(s[i]);
            countFromEnd += isVowel(s[n - 1 - i]);
        }
        return countFromStart == countFromEnd;
    }
};