class Solution {
public:
    bool canConstruct(string ransomNote, string magazine) {
        unordered_map<char, int> counter;
        for (auto &word : magazine) {
            counter[word]++;
        }
        for (auto &word : ransomNote) {
            if (counter.find(word) == counter.end() || counter[word] <= 0) return false;
            counter[word]--;
        }
        return true;
    }
};