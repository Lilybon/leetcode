// Monotonic Stack
// class Solution {
// private:
//     static bool compare(vector<int>& a, vector<int>& b) {
//         return a[0] == b[0] ? a[1] > b[1] : a[0] < b[0];
//     }
// public:
//     int numberOfWeakCharacters(vector<vector<int>>& properties) {
//         // Sort attack in ascending order.
//         // And sort defense in decreasing order if both characters have same defense.
//         sort(properties.begin(), properties.end(), compare);
//         int count = 0;
//         stack<vector<int>> s;
//         for (auto &property : properties) {
//             while (!s.empty() && s.top()[1] < property[1]) {
//                 count++;
//                 s.pop();
//             }
//             s.push(property);
//         }
//         return count;
//     }
// };


// Greedy
class Solution {
private:
    static bool compare(vector<int>& a, vector<int>& b) {
        return a[0] == b[0] ? a[1] > b[1] : a[0] < b[0];
    }
public:
    int numberOfWeakCharacters(vector<vector<int>>& properties) {
        // Sort attack in ascending order.
        // And sort defense in decreasing order if both characters have same defense.
        sort(properties.begin(), properties.end(), compare);
        int count = 0, maxDefense = 0;
        for (int i = properties.size() - 1; i >= 0; --i) {
            if (maxDefense > properties[i][1]) count++;
            else maxDefense = properties[i][1];
        }
        return count;
    }
};