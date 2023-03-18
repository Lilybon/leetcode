class TrieNode {
public:
    bool isLeaf = false;
    TrieNode* children[26];
};

class Trie {
private:
    TrieNode* root;
    TrieNode* getNode (string word) {
        auto node = root;
        for (auto c : word) {
            int index = c - 'a';
            if (node->children[index] == NULL) {
                return NULL;
            }
            node = node->children[index];
        }
        return node;
    }
public:
    Trie() {
        root = new TrieNode();
    }
    
    void insert(string word) {
        auto node = root;
        for (auto c : word) {
            int index = c - 'a';
            if (node->children[index] == NULL) {
                node->children[index] = new TrieNode();
            }
            node = node->children[index];
        }
        node->isLeaf = true;
    }
    
    bool search(string word) {
        auto node = getNode(word);
        return node != NULL && node->isLeaf;
    }
    
    bool startsWith(string prefix) {
        auto node = getNode(prefix);
        return node != NULL;
    }
};

/**
 * Your Trie object will be instantiated and called as such:
 * Trie* obj = new Trie();
 * obj->insert(word);
 * bool param_2 = obj->search(word);
 * bool param_3 = obj->startsWith(prefix);
 */