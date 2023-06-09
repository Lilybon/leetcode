// class Solution {
// public:
//     char nextGreatestLetter(vector<char>& letters, char target) {
//         int index = upper_bound(letters.begin(), letters.end(), target) - letters.begin();
//         return index >= letters.size() ? letters[0] : letters[index];
//     }
// };

class Solution {
public:
    char nextGreatestLetter(vector<char>& letters, char target) {
        int left = 0, right = letters.size() - 1;
        while (left <= right) {
            const int mid = left + (right - left) / 2;
            if (letters[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return left >= letters.size() ? letters[0] : letters[left];
    }
};