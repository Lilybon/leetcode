class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        n = len(s)
        map = {}
        maxLen = j = 0
        for i in range(n):
            c = s[i]
            if c in map:
                j = max(j, map[c] + 1)
            maxLen = max(maxLen, i - j + 1)
            map[s[i]] = i
        return maxLen