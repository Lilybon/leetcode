class Solution {
public:
    bool isAlienSorted(vector<string>& words, string order) {
        int orderList[26] = {};
        for (int i = 0; i < order.size(); ++i) {
            orderList[order[i] - 'a'] = i;
        }
        
        for (int i = 0; i < words.size() - 1; ++i) {
            for (int j = 0; j < words[i].size(); ++j) {
                if (j >= words[i + 1].size()) {
                    return false;
                }
                int currentIndex = words[i][j] - 'a',
                    nextIndex = words[i + 1][j] - 'a';
                if (orderList[nextIndex] > orderList[currentIndex]) {
                    break;
                }
                if (orderList[currentIndex] > orderList[nextIndex]) {
                    return false;
                }
            }
        }

        return true;
    }
};