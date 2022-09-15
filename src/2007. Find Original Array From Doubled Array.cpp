class Solution {
public:
    vector<int> findOriginalArray(vector<int>& changed) {
        if (changed.size() % 2) return {};
        unordered_map<int, int> count;
        for (int value : changed) count[value]++;
        vector<int> keys;
        for (auto it : count) keys.push_back(it.first);
        sort(keys.begin(), keys.end(), [](int i, int j) { return abs(i) < abs(j); });
        vector<int> res;
        for (int key : keys) {
            if (count[key] > count[2 * key]) return {};
            for (int i = 0; i < count[key]; ++i, count[2 * key]--) {
                res.push_back(key);
            }
        }
        return res;
    }
};