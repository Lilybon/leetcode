class Solution:
    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'
        s = self.countAndSay(n - 1)
        ans = ''
        count = 1
        prev_char = s[0]
        for i in range(1, len(s)):
            if s[i] == prev_char:
                count += 1
            else:
                ans += str(count) + prev_char
                prev_char = s[i]
                count = 1
        if count > 0:
            ans += str(count) + prev_char
        return ans
            