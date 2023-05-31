class MyHashSet {
private:
    bool table[1000001];
public:
    void add(int key) {
        table[key] = true;
    }
    
    void remove(int key) {
        table[key] = false;
    }
    
    bool contains(int key) {
        return table[key];
    }
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * MyHashSet* obj = new MyHashSet();
 * obj->add(key);
 * obj->remove(key);
 * bool param_3 = obj->contains(key);
 */