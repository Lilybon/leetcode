class Solution {
    public:
        int maxScoreSightseeingPair(vector < int > & values) {
            int n = values.size();
            int pick = values[0];
            int maxScore = 0;
            for (int i = 1; i < n; ++i) {
                int prePick = pick;
                pick = max(pick, values[i] + i);
                maxScore = max(maxScore, prePick + values[i] - i);
            }
            return maxScore;
        }
};