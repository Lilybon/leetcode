class Solution:
    def findTheDifference(self, s: str, t: str) -> str:
        code = 0
        for c in s + t:
            code ^= ord(c)
        return chr(code)
         