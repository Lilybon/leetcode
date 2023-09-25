class Solution {
public:
    bool feasible(vector<int>& weights, int weightLimit, int days) {
        int daysNeeded = 1, currentWeight = 0;
        for (int weight : weights) {
            currentWeight += weight;
            if (currentWeight > weightLimit) {
                daysNeeded++;
                currentWeight = weight;
            }
        }

        return daysNeeded <= days;
    }

    int shipWithinDays(vector<int>& weights, int days) {
        int maxWeight = 0;
        int totalWeight = 0;
        for (int weight : weights) {
            maxWeight = max(maxWeight, weight);
            totalWeight += weight;
        }
        int left = maxWeight;
        int right = totalWeight;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (feasible(weights, mid, days)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};