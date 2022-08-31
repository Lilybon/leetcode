class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& heights) {
        vector<vector<int>> ans;
        int m = heights.size();
        int n = heights[0].size();
        vector<int> dp(m * n);
        for (int i = 0; i < m; i++) {
            dfs(heights, dp, i, 0, 1, 0);
            dfs(heights, dp, i, n - 1, 2, 0);
        }
        for (int i = 0; i < n; i++) {
            dfs(heights, dp, 0, i, 1, 0);
            dfs(heights, dp, m - 1, i, 2, 0);
        }
        for (int i = 0; i < m; i++) 
            for (int j = 0; j < n; j++) 
                if (dp[i * n + j] == 3) 
                    ans.push_back({i, j});
        return ans;
    }
private:
    void dfs(const vector<vector<int>>& heights, vector<int>& dp, int i, int j, int w, int h) {
        int m = heights.size();
        int n = heights[0].size();
        int ij = i * n + j;
        int newh = heights[i][j];
        if ((dp[ij] & w) || newh < h) return;
        dp[ij] += w;
        if (i + 1 < m) dfs(heights, dp, i + 1, j, w, newh);
        if (i > 0) dfs(heights, dp, i - 1, j, w, newh);
        if (j + 1 < n) dfs(heights, dp, i, j + 1, w, newh);
        if (j > 0) dfs(heights, dp, i, j - 1, w, newh);
    }
};