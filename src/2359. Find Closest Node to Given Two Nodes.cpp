class Solution {
public:
    int closestMeetingNode(vector<int>& edges, int node1, int node2) {
        int n = edges.size();

        vector<int> dist1(n, -1), dist2(n, -1);
        for (int i = node1, dist = 0; i != -1 && dist1[i] == -1; i = edges[i]) {
            dist1[i] = dist++;
        }
        for (int i = node2, dist = 0; i != -1 && dist2[i] == -1; i = edges[i]) {
            dist2[i] = dist++;
        }

        int minDist = INT_MAX, target = -1;
        for (int i = 0; i < n; ++i) {
            if (dist1[i] == -1 || dist2[i] == -1) {
                continue;
            }
            int localMinDist = max(dist1[i], dist2[i]);
            if (localMinDist >= minDist) {
                continue;
            }
            minDist = localMinDist;
            target = i;
        }
        return target;
    }
};