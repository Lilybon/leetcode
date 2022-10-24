class Solution:
    def maxLength(self, arr: List[str]) -> int:
        dp = [set()]
        for s in arr:
            if len(set(s)) != len(s):
                continue
            s = set(s)
            for c in dp:
                if s & c:
                    continue
                dp.append(s | c)
        return max(len(s) for s in dp)
                