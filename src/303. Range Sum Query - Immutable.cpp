class NumArray {
private:
    vector<int> prefixSums;
public:
    NumArray(vector<int>& nums) {
        int n = nums.size();
        prefixSums.resize(n + 1);
        for (int i = 1; i < prefixSums.size(); ++i) {
            prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
        }
    }
    int sumRange(int left, int right) {
        return prefixSums[right + 1] - prefixSums[left];
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * int param_1 = obj->sumRange(left,right);
 */