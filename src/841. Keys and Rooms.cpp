// Recursive DFS
// class Solution {
// private:
//     vector<bool> visited;
//     void dfs(vector<vector<int>>& rooms, int index) {
//         if (visited[index]) {
//             return;
//         }
//         visited[index] = true;
//         for (auto& nextRoom : rooms[index]) {
//             dfs(rooms, nextRoom);
//         }
//     }
// public:
//     bool canVisitAllRooms(vector<vector<int>>& rooms) {
//         visited.resize(rooms.size());
//         dfs(rooms, 0);
//         for (bool flag : visited) {
//             if (!flag) {
//                 return false;
//             }
//         }
//         return true;
//     }
// };

// BFS
class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        unordered_set<int> visited = {0};
        queue<int> roomQueue;
        roomQueue.push(0);
        while (!roomQueue.empty()) {
            int index = roomQueue.front();
            roomQueue.pop();
            for (int nextIndex : rooms[index]) {
                if (visited.count(nextIndex) == 0) {
                    visited.insert(nextIndex);
                    roomQueue.push(nextIndex);
                }
            }
        }
        return rooms.size() == visited.size();
    }
};