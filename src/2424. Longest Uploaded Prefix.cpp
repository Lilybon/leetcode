class LUPrefix {
private:
    int length = 0;
    unordered_set<int> nums;
public:
    LUPrefix(int n) {
    }
    
    void upload(int video) {
        nums.insert(video);
    }
    
    int longest() {
        while (nums.count(length + 1)) {
            length++;
        }
        return length;
    }
};

/**
 * Your LUPrefix object will be instantiated and called as such:
 * LUPrefix* obj = new LUPrefix(n);
 * obj->upload(video);
 * int param_2 = obj->longest();
 */