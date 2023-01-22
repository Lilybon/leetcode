class Solution {
private:
    array<int, 26> uf;

    int find(int x) {
        if (uf[x] == x) {
            return x;
        }
        
        return uf[x] = find(uf[x]);
    }

    void performUnion(int x, int y) {
        x = find(x);
        y = find(y);
        
        if (x == y) {
            return;
        }
        
        if (x < y) {
            uf[y] = x;
        } else {
            uf[x] = y;
        }
    }

public:
    string smallestEquivalentString(string s1, string s2, string baseStr) {
        for (int i = 0; i < 26; i++) {
            uf[i] = i;
        }
        
        for (int i = 0; i < s1.size(); i++) {
            performUnion(s1[i] - 'a', s2[i] - 'a');
        }
        
        string ans;
        for (char c : baseStr) {
            ans += (char)(find(c - 'a') + 'a');
        }
        
        return ans;
    }
};