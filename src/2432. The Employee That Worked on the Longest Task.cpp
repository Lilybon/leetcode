class Solution {
public:
    int hardestWorker(int n, vector<vector<int>>& logs) {
        int longestTask = logs[0][1],
            id = logs[0][0];
        for (int i = 1; i < logs.size(); ++i) {
            if (logs[i][1] - logs[i - 1][1] > longestTask) {
                longestTask = logs[i][1] - logs[i - 1][1];
                id = logs[i][0];
            } else if (logs[i][1] - logs[i - 1][1] == longestTask) {
                id = min(id, logs[i][0]);
            }
        }
        return id;
    }
};