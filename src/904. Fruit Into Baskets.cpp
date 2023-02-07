class Solution {
public:
    int totalFruit(vector<int>& fruits) {
        int left, right;
        unordered_map<int, int> countMap;

        for (left = 0, right = 0; right < fruits.size(); ++right) {
            countMap[fruits[right]]++;
            if (countMap.size() <= 2) {
                continue;
            }
            countMap[fruits[left]]--;
            if (countMap[fruits[left]] == 0) {
                countMap.erase(fruits[left]);
            }
            left++;
        }

        return right - left;
    }
};