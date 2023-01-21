class Solution {
public:
    int subarraysDivByK(vector<int>& nums, int k) {
        int prefixMod = 0, ans = 0;

        vector<int> modGroups(k);
        modGroups[0] = 1;

        for (int num : nums) {
            // Take modulo twice to avoid negative remainders.
            // e.g. if k = 5, then prefixSum -1 = -1 * 5 + 4.
            prefixMod = (prefixMod + num % k + k) % k;
            ans += modGroups[prefixMod];
            modGroups[prefixMod]++;
        }

        return ans;
    }
};