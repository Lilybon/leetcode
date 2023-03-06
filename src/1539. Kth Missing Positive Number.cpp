// class Solution {
// public:
//     int findKthPositive(vector<int>& arr, int k) {
//         if (arr[0] > k) {
//             return k;
//         }

//         int totalMissing = k - arr[0] + 1;
//         for (int i = 1; i < arr.size(); ++i) {
//             int missing = arr[i] - arr[i - 1] - 1;
//             if (missing >= totalMissing) {
//                 return arr[i - 1] + totalMissing;
//             }
//             totalMissing -= missing;
//         }

//         return arr.back() + totalMissing;
//     }
// };

class Solution {
public:
    int findKthPositive(vector<int>& arr, int k) {
        int left = 0, right = arr.size();
        while (left < right) {
            int mid = (right - left) / 2 + left;
            if (arr[mid] - mid - 1 < k) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left + k;
    }
};