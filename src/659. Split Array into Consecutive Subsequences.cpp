class Solution {
    public:
        bool isPossible(vector < int > & nums) {
            unordered_map < int, int > frequencies;
            for (int x: nums) {
                frequencies[x]++;
            }
            unordered_map < int, int > needs;
            for (int num: nums) {
                if (frequencies[num] == 0) continue;
                if (needs[num] > 0) {
                    needs[num]--;
                    frequencies[num]--;
                    needs[num + 1]++;
                } else if (frequencies[num] > 0 && frequencies[num + 1] > 0 && frequencies[num + 2] > 0) {
                    frequencies[num]--;
                    frequencies[num + 1]--;
                    frequencies[num + 2]--;
                    needs[num + 3]++;
                } else {
                    return false;
                }
            }
            return true;
        }
};