class Node:
    def __init__(self):
        self.children = {}
        self.count = 0
        
class Trie:
    def __init__(self):
        self.trie = Node()
    def insert(self, word) -> None:
        node = self.trie
        for char in word:
            if char not in node.children:
                node.children[char] = Node()
            node = node.children[char]
            node.count += 1
    def count(self, word) -> int:
        node = self.trie
        total_count = 0
        for char in word:
            total_count += node.children[char].count
            node = node.children[char]
        return total_count

class Solution:
    def sumPrefixScores(self, words: List[str]) -> List[int]:
        trie = Trie()

        for word in words:
            trie.insert(word)

        return [trie.count(word) for word in words]