/*
// Definition for a Node.
class Node {
public:
    int val;
    vector<Node*> neighbors;
    Node() {
        val = 0;
        neighbors = vector<Node*>();
    }
    Node(int _val) {
        val = _val;
        neighbors = vector<Node*>();
    }
    Node(int _val, vector<Node*> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
};
*/

// DFS
// class Solution {
// private:
//   unordered_map<int, Node*> traverse;
// public:
//     Node* cloneGraph(Node* node) {
//         if (!node) {
//             return nullptr;
//         }
//         if (traverse.find(node->val) != traverse.end()) {
//           return traverse[node->val];
//         }
//         Node* clonedNode = new Node(node->val);
//         traverse[node->val] = clonedNode;
//         for (auto neighbor : node->neighbors) {
//           clonedNode->neighbors.push_back(cloneGraph(neighbor));
//         }
//         return clonedNode;
//     }
// };

// BFS
class Solution {
public:
    Node* cloneGraph(Node* node) {
        if (!node) {
            return nullptr;
        }

        unordered_map<int, Node*> traverse;
        traverse[node->val] = new Node(node->val);
        queue<Node*> q;
        q.push(node);
        while (!q.empty()) {
            auto curr = q.front();
            q.pop();
            for (auto neighbor : curr->neighbors) {
                if (traverse.find(neighbor->val) == traverse.end()) {
                    traverse[neighbor->val] = new Node(neighbor->val);
                    q.push(neighbor);
                }
                traverse[curr->val]->neighbors.push_back(traverse[neighbor->val]);
            }
        }
        return traverse[node->val];
    }
};