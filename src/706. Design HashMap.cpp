class MyHashMap {
private:
    vector<vector<int>> data;
public:
    MyHashMap() {
        data.resize(1001, vector<int>());
    }
    
    void put(int key, int value) {
        int x = key / 1000, y = key % 1000;
        if (data[x].empty()) {
            data[x].resize(1000, -1);
        }
        data[x][y] = value;
    }
    
    int get(int key) {
        int x = key / 1000, y = key % 1000;
        if (data[x].empty()) {
            return -1;
        }
        return data[x][y];
    }
    
    void remove(int key) {
        int x = key / 1000, y = key % 1000;
        if (!data[x].empty()) {
            data[x][y] = -1;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * MyHashMap* obj = new MyHashMap();
 * obj->put(key,value);
 * int param_2 = obj->get(key);
 * obj->remove(key);
 */