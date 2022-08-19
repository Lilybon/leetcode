// Greedy (Array)
// class Solution {
//     public:
//         int minSetSize(vector < int > & arr) {
//             int n = arr.size();
//             unordered_map < int, int > map;
//             for (int x: arr) {
//                 map[x]++;
//             }
//             vector < int > counts;
//             for (auto & [num, count]: map) {
//                 counts.push_back(count);
//             }
//             sort(counts.rbegin(), counts.rend());
//             for (int i = 0, count = 0; i < n; ++i) {
//                 count += counts[i];
//                 if (count >= n / 2) return i + 1;
//             }
//             return counts.size();
//         }
// };

// Greedy (Priority Queue)
class Solution {
    public:
        int minSetSize(vector < int > & arr) {
            int n = arr.size();
            unordered_map < int, int > map;
            priority_queue < int > priorityQueue;
            for (int x: arr) {
                map[x]++;
            }
            for (auto & [num, count]: map) {
                priorityQueue.push(count);
            }
            int count = 0;
            int result = 0;
            while (!priorityQueue.empty()) {
                count += priorityQueue.top();
                priorityQueue.pop();
                result++;
                if (count >= n / 2) return result;
            }
            return 0;
        }
};