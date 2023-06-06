// Sort
// class Solution {
// public:
//     bool canMakeArithmeticProgression(vector<int>& arr) {
//         sort(arr.begin(), arr.end());
//         const int diff = arr[1] - arr[0];
//         for (int i = 2; i < arr.size(); ++i) {
//             if (arr[i] - arr[i - 1] != diff) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };

// Set
// class Solution {
// public:
//     bool canMakeArithmeticProgression(vector<int>& arr) {
//         const int minValue = *min_element(arr.begin(), arr.end()),
//             maxValue = *max_element(arr.begin(), arr.end()),
//             n = arr.size();

//         if (maxValue == minValue) {
//             return true;
//         }

//         if ((maxValue - minValue) % (n - 1)) {
//             return false;
//         }

//         const int diff = (maxValue - minValue) / (n - 1);
//         unordered_set<int> valueSet;
//         for (int i = 0; i < n; ++i) {
//             if ((arr[i] - minValue) % diff) {
//                 return false;
//             }
//             valueSet.insert(arr[i]);
//         }
//         return valueSet.size() == n;
//     }
// };

// In-place Modification
class Solution {
public:
    bool canMakeArithmeticProgression(vector<int>& arr) {
        const int minValue = *min_element(arr.begin(), arr.end()),
            maxValue = *max_element(arr.begin(), arr.end()),
            n = arr.size();
        
        if (maxValue == minValue) {
            return true;
        }

        if ((maxValue - minValue) % (n - 1)) {
            return false;
        }

        const int diff = (maxValue - minValue) / (n - 1);
        int i = 0;
        while (i < n) {
            if (arr[i] == i * diff + minValue) {
                i++;
            } else if ((arr[i] - minValue) % diff) {
                return false;
            } else {
                const int j = (arr[i] - minValue) / diff;

                if (arr[i] == arr[j]) {
                    return false;
                }

                swap(arr[i], arr[j]);
            }
        }

        return true;
    }
};