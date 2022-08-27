class NumArray {
private:
    vector<int> sums;
    vector<int> arr;
    int lowbit (int x) {
        return x & (-x);
    }
    int getSum (int index) {
        int sum = 0;
        for (int i = index; i > 0; i -= lowbit(i)) {
            sum += sums[i];
        }
        return sum;
    }
public:
    NumArray(vector<int>& nums) {
        int n = nums.size();
        sums.resize(n + 1);
        arr.resize(n + 1);
        for (int i = 0; i < n; ++i) {
            update(i, nums[i]);
        }
    }
    
    void update(int index, int val) {
        int delta = val - arr[index];
        for (int i = index + 1; i < sums.size(); i += lowbit(i)) {
            sums[i] += delta;
        }
        arr[index] += delta;
    }
    
    int sumRange(int left, int right) {
        return getSum(right + 1) - getSum(left);
    }
};

/**
 * Your NumArray object will be instantiated and called as such:
 * NumArray* obj = new NumArray(nums);
 * obj->update(index,val);
 * int param_2 = obj->sumRange(left,right);
 */