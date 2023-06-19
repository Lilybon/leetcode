class Solution {
public:
    int largestAltitude(vector<int>& gain) {
        int altitude = 0, highestAltitude = 0;
        for (auto g : gain) {
            altitude += g;
            highestAltitude = max(highestAltitude, altitude);
        }
        return highestAltitude;
    }
};