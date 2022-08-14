class Solution {
    public:
        int edgeScore(vector < int > & edges) {
            int n = edges.size();
            vector < long > scores(n, 0);
            for (int i = 0; i < n; ++i) {
                scores[edges[i]] += i;
            }
            int result;
            long maxScore = LONG_MIN;
            for (int i = 0; i < n; ++i) {
                if (scores[i] > maxScore) {
                    maxScore = scores[i];
                    result = i;
                }
            }
            return result;
        }
};