class SnapshotArray {
private:
    vector<vector<pair<int, int>>> records;
    int id = 0;
public:
    SnapshotArray(int length) {
        records.resize(length);
        for (int index = 0; index < length; ++index) {
            records[index].push_back(make_pair(0, 0));
        }
    }
    
    void set(int index, int val) {
        records[index].push_back({id, val});
    }
    
    int snap() {
        return id++;
    }
    
    int get(int index, int snap_id) {
        auto itr = upper_bound(records[index].begin(), records[index].end(), make_pair(snap_id, INT_MAX));
        return prev(itr)->second;
    }
};

/**
 * Your SnapshotArray object will be instantiated and called as such:
 * SnapshotArray* obj = new SnapshotArray(length);
 * obj->set(index,val);
 * int param_2 = obj->snap();
 * int param_3 = obj->get(index,snap_id);
 */