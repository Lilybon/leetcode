class Solution {
    public:
        int minSetSize(vector < int > & arr) {
            int n = arr.size();
            unordered_map < int, int > map;
            for (int x: arr) {
                map[x]++;
            }
            vector < int > counts;
            for (auto & [num, count]: map) {
                counts.push_back(count);
            }
            sort(counts.rbegin(), counts.rend());
            for (int i = 0, count = 0; i < n; ++i) {
                count += counts[i];
                if (count >= n / 2) return i + 1;
            }
            return counts.size();
        }
};