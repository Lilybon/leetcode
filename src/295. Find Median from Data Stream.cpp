class MedianFinder {
private:
    multiset<int> s;
    multiset<int>::iterator itr;
public:
    void addNum(int num) {
        s.insert(num);

        if (s.size() == 1) {
            itr = s.begin();
            return;
        }

        if (s.size() % 2 == 1) {
            if (num >= *itr) {
                itr = next(itr, 1);
            }
            return;
        }

        if (num < *itr) {
            itr = prev(itr, 1);
        }
    }
    
    double findMedian() {
        return s.size() % 2 == 1
            ? *itr
            : *itr * 0.5 + *next(itr, 1) * 0.5;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * MedianFinder* obj = new MedianFinder();
 * obj->addNum(num);
 * double param_2 = obj->findMedian();
 */