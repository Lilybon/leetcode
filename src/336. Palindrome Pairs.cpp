class Solution {
private:
    bool isPalindrome(string &s, int i, int j) {
        while (i < j) {
            if (s[i++] != s[j--]) return false;
        }
        return true;
    }
public:
    vector<vector<int>> palindromePairs(vector<string> &words) {
        vector<vector<int>> ans;
        unordered_map<string, int> indice;
        set<int> wordSizes;
        for (int i = 0; i < words.size(); i++) {
            indice[words[i]] = i;
            wordSizes.insert(words[i].size());
        }
        for (int i = 0; i < words.size(); ++i) {
            string reversedWord(words[i]);
            reverse(reversedWord.begin(), reversedWord.end());
            int ln = reversedWord.size();
            if (indice.find(reversedWord) != indice.end() && indice[reversedWord] != i) ans.push_back({i, indice[reversedWord]});
            for (auto l : wordSizes){
                if (l >= ln) break;
                if (isPalindrome(words[i], 0, ln - l - 1)){
                    string p = reversedWord.substr(0, l);
                    if(indice.find(p) != indice.end()) ans.push_back({indice[p], i});
                }
                if (isPalindrome(words[i], l, ln - 1)){
                    string p = reversedWord.substr(ln - l);
                    if(indice.find(p) != indice.end()) ans.push_back({i, indice[p]});
                }
            }
        }
        return ans;
    }
};