// Stack
// class Solution {
// public:
//     string makeGood(string s) {
//         stack<char> st;
//         for (char c : s) {
//             if (!st.empty() && abs(st.top() - c) == 32) {
//                 st.pop();
//             } else {
//                 st.push(c);
//             }
//         }
        
//         string ans;
//         while (!st.empty()) {
//             ans = st.top() + ans;
//             st.pop();
//         }
//         return ans;
//     }
// };

// Two Pointer
class Solution {
public:
    string makeGood(string s) {
        int left = 0;
        for (int right = 0; right < s.size(); ++right) {
            if (left > 0 && abs(s[right] - s[left - 1]) == 32) {
                left--;
            } else {
                s[left] = s[right];
                left++;
            }
        }
        return s.substr(0, left);
    }
};