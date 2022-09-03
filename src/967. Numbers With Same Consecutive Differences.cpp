// Backtracking
// class Solution {
// private:
//     void backtracking (vector<int>& results, int n, int k, int value) {
//         if (n == 0) {
//             results.push_back(value);
//             return;
//         }
//         n--;
//         int remainder = value % 10;
//         value *= 10;
//         if (remainder + k < 10) {
//             backtracking(results, n, k, value + remainder + k);
//         }
//         if (k > 0 && remainder - k >= 0) {
//             backtracking(results, n, k, value + remainder - k);
//         }
//     }
// public:
//     vector<int> numsSameConsecDiff(int n, int k) {
//         vector<int> results;
//         n--;
//         for (int i = 1; i <= 9; ++i) {
//             backtracking(results, n, k, i);
//         }
//         return results;
//     }
// };

// BFS
class Solution {
public:
    vector<int> numsSameConsecDiff(int n, int k) {
        vector<int> results = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        for (int i = 2; i <= n; ++i) {
            vector<int> candidates;
            for (auto &value :results) {
                int remainder = value % 10;
                value *= 10;
                if (remainder + k < 10) {
                    candidates.push_back(value + remainder + k);
                }
                if (k > 0 && remainder - k >= 0) {
                    candidates.push_back(value + remainder - k);
                }
            }
            results = candidates;
        }
        return results;
    }
};