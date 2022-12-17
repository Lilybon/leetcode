class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        unordered_map<string, function<long (long, long)>> ops = {
            {"+", [] (long a, long b) { return a + b; }},
            {"-", [] (long a, long b) { return a - b; }},
            {"*", [] (long a, long b) { return a * b; }},
            {"/", [] (long a, long b) { return a / b; }},
        };
        stack<long> st;
        for (string& s : tokens) {
            if (ops.find(s) == ops.end()) {
                st.push(stoi(s));
                continue;
            }
            long v2 = st.top();
            st.pop();
            long v1 = st.top();
            st.pop();
            st.push(ops[s](v1, v2));
        }
        return (int) st.top();
    }
};