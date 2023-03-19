class TrieNode {
public:
    bool isLeaf = false;
    TrieNode* children[26];
};

class WordDictionary {
private:
    TrieNode* root;
    bool searchHelper(TrieNode* node, string& word, int start) {
        for (int i = start; i < word.size(); ++i) {
            auto c = word[i];
            if (c == '.') {
                for (int j = 0; j < 26; ++j) {
                    if (node->children[j] && searchHelper(node->children[j], word, i + 1)) {
                        return true;
                    }
                }
                return false;
            }
            if (!node->children[c - 'a']) {
                return false;
            }
            node = node->children[c - 'a'];
        }
        return node->isLeaf;
    }
public:
    WordDictionary() {
        root = new TrieNode();
    }
    
    void addWord(string word) {
        auto node = root;
        for (auto c : word) {
            int i = c - 'a';
            if (!node->children[i]) {
                node->children[i] = new TrieNode();
            }
            node = node->children[i];
        }
        node->isLeaf = true;
    }
    
    bool search(string word) {
        return searchHelper(root, word, 0);
    }
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * WordDictionary* obj = new WordDictionary();
 * obj->addWord(word);
 * bool param_2 = obj->search(word);
 */