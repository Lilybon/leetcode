class Solution {
public:
    bool checkStraightLine(vector<vector<int>>& coordinates) {
        const int dx1 = coordinates[1][0] - coordinates[0][0], dy1 = coordinates[1][1] - coordinates[0][1];
        for (int i = 2; i < coordinates.size(); ++i) {
            const int dx2 = coordinates[i][0] - coordinates[0][0], dy2 = coordinates[i][1] - coordinates[0][1];
            if (dx1 * dy2 != dx2 * dy1) {
                return false;
            }
        }
        return true;
    }
};