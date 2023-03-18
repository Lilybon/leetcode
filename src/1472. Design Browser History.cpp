class BrowserHistory {
private:
  stack<string> historyBack, historyForward;
  string currentPage;
public:
    BrowserHistory(string homepage) {
      currentPage = homepage;
    }
    
    void visit(string url) {
        historyForward = stack<string>();
        historyBack.push(currentPage);
        currentPage = url;
    }
    
    string back(int steps) {
        while (steps > 0 && !historyBack.empty()) {
          historyForward.push(currentPage);
          currentPage = historyBack.top();
          historyBack.pop();
          steps--;
        }
        return currentPage;
    }
    
    string forward(int steps) {
        while (steps > 0 && !historyForward.empty()) {
          historyBack.push(currentPage);
          currentPage = historyForward.top();
          historyForward.pop();
          steps--;
        }
        return currentPage;
    }
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * BrowserHistory* obj = new BrowserHistory(homepage);
 * obj->visit(url);
 * string param_2 = obj->back(steps);
 * string param_3 = obj->forward(steps);
 */