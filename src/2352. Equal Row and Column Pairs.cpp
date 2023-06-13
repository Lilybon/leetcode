class TrieNode {
public:
    int count = 0;
    unordered_map<int, TrieNode*> children;
};

class Solution {
public:
    int equalPairs(vector<vector<int>>& grid) {
        const int n = grid.size();

        auto trie = new TrieNode();
        for (int i = 0; i < n; ++i) {
            auto node = trie;
            for (int j = 0; j < n; ++j) {
                const int value = grid[i][j];
                if (node->children.find(value) == node->children.end()) {
                    node->children[value] = new TrieNode();
                }
                node = node->children[value];
            }
            node->count += 1;
        }

        int ans = 0;
        for (int i = 0; i < n; ++i) {
            auto node = trie;
            for (int j = 0; j < n; ++j) {
                const int value = grid[j][i];
                if (node->children.find(value) == node->children.end()) {
                    break;
                }
                node = node->children[value];
            }
            ans += node->count;
        }
        return ans;
    }
};