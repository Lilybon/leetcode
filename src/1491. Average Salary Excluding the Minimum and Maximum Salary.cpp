class Solution {
public:
    double average(vector<int>& salary) {
        int minS = 10e6, maxS = 1000, sumS = 0;
        for (auto s : salary) {
            maxS = max(maxS, s);
            minS = min(minS, s);
            sumS += s;
        }
        return (double) (sumS - minS - maxS) / (salary.size() - 2);
    }
};