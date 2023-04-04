class Solution {
public:
    int partitionString(string s) {
        int count = 1, substringStart = 0;
        int lastSeen[26];
        fill(begin(lastSeen), end(lastSeen), -1);
        for (int i = 0; i < s.size(); ++i) {
            if (lastSeen[s[i] - 'a'] >= substringStart) {
                count++;
                substringStart = i;
            }
            lastSeen[s[i] - 'a'] = i;
        }
        return count;
    }
};