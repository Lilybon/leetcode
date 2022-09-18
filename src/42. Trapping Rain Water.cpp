// DP
// class Solution {
// public:
//     int trap(vector<int>& height) {
//         if (height.empty()) return 0;
//         int ans = 0, n = height.size();
//         vector<int> leftMax(n), rightMax(n);
//         leftMax[0] = height[0];
//         for (int i = 1; i < n; ++i) {
//             leftMax[i] = max(height[i], leftMax[i - 1]);
//         }
//         rightMax[n - 1] = height[n - 1];
//         for (int i = n - 2; i >= 0; --i) {
//             rightMax[i] = max(height[i], rightMax[i + 1]);
//         }
//         for (int i = 1; i < n - 1; ++i) {
//             ans += min(leftMax[i], rightMax[i]) - height[i];
//         }
//         return ans;
//     }
// };

// Monotonic Stack
class Solution {
public:
    int trap(vector<int>& height) {
        int n = height.size(), ans = 0, current = 0;
        stack<int> st;
        while (current < n) {
            while (!st.empty() && height[current] > height[st.top()]) {
                int top = st.top();
                st.pop();
                if (st.empty()) break;
                int distance = current - st.top() - 1;
                int boundedHeight = min(height[current], height[st.top()]) - height[top];
                ans += distance * boundedHeight;
            }
            st.push(current++);
        }
        return ans;
    }
};