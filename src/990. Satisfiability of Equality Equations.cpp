class Solution {
public:
    int find(vector<int> &uf, int x){
        if(x != uf[x]) uf[x] = find(uf, uf[x]);
        return uf[x];
    }
    bool equationsPossible(vector<string>& equations) {
        vector<int> uf(26 ,0);
        for(int i = 0; i < 26; ++i) {
            uf[i] = i;
        }
        
        for(auto e : equations){
            if(e[1] == '='){
                int ra = find(uf, e[0] - 'a');
                int rb = find(uf, e[3] - 'a');
                uf[ra] = rb;
            }
        }
        
        for(auto e : equations){
            if(e[1] == '!' && find(uf, e[0] - 'a') == find(uf, e[3] - 'a')) {
                return false;
            }
        }
        return true;
    }
};