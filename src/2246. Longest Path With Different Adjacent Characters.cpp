class Solution {
public:
    int dfs(int node, vector<vector<int>>& children, string& s, int& longestPath) {
        int longestSubpath = 0, secondLongestSubpath = 0;
        for (int child : children[node]) {
            int longestSubpathStartingFromChild = dfs(child, children, s, longestPath);
            if (s[node] == s[child]) {
                continue;
            }
            if (longestSubpathStartingFromChild > longestSubpath) {
                secondLongestSubpath = longestSubpath;
                longestSubpath = longestSubpathStartingFromChild;
            } else if (longestSubpathStartingFromChild > secondLongestSubpath) {
                secondLongestSubpath = longestSubpathStartingFromChild;
            }
        }

        longestPath = max(longestPath, longestSubpath + secondLongestSubpath + 1);
        return longestSubpath + 1;
    }

    int longestPath(vector<int>& parent, string s) {
        int n = parent.size();
        vector<vector<int>> children(n);
        for (int i = 1; i < n; ++i) {
            children[parent[i]].push_back(i);
        }

        int longestPath = 1;
        dfs(0, children, s, longestPath);

        return longestPath;
    }
};