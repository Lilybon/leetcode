class Solution {
public:
    int minimumRecolors(string blocks, int k) {
        char B = 'B';
        int BCount = 0;
        for (int i = 0; i < k; ++i) {
            if (blocks[i] == B) BCount++;
        }
        if (BCount >= k) return 0;
        int maxBCount = BCount;
        for (int i = k; i < blocks.size(); ++i) {
            if (blocks[i] == B) BCount++;
            if (blocks[i - k] == B) BCount--;
            if (BCount >= k) return 0;
            maxBCount = max(maxBCount, BCount);
        }
        return k - maxBCount;
    }
};