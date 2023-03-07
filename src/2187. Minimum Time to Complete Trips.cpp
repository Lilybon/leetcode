class Solution {
public:
    long long int numberOfTripsForGivenTime(vector<int>&arr, long long int givenTime) {
        long long int totalTrips = 0;
        for(auto x : arr) {
            long long int val = x;
            totalTrips += (givenTime / val);
        }
        return totalTrips;
    }
    long long minimumTime(vector<int>& arr, int totalTrips) {
        long long int left = 1, right = 1e14;
        while (left < right) {
            long long int mid = (right - left) / 2 + left;
            
            if (numberOfTripsForGivenTime(arr, mid) >= totalTrips) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};