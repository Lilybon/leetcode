class Solution {
private:
    double calculateTotalHour(vector<int>& dist, int speed) {
        double totalHour = 0.0;
        for (int i = 0; i < dist.size(); ++i) {
            const double hour = (double) dist[i] / (double) speed;
            totalHour += i == dist.size() - 1 ? hour : ceil(hour);
        }
        return totalHour;
    }
public:
    int minSpeedOnTime(vector<int>& dist, double hour) {
        int left = 1;
        int right = 1e7;
        double minSpeed = -1;
        while (left <= right) {
            const int mid = left + (right - left) / 2;
            if (calculateTotalHour(dist, mid) <= hour) {
                minSpeed = mid;
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return minSpeed;
    }
};