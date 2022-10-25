class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        i = j = m = n = 0
        while i < len(word1) and j < len(word2):
            if word1[i][m] != word2[j][n]:
                return False
            if m == len(word1[i]) - 1:
                i += 1
                m = 0
            else:
                m += 1
            if n == len(word2[j]) - 1:
                j += 1
                n = 0
            else:
                n += 1
        return i == len(word1) and j == len(word2)