class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if not t or not s:
            return ""
        dict_t = Counter(t)
        required_count = len(dict_t)
        filtered_s = []

        for i, char in enumerate(s):
            if char in dict_t:
                filtered_s.append((i, char))
        
        l = r = formed_count = 0
        dict_s = {}
        ans = float("inf"), None, None

        while r < len(filtered_s):
            char = filtered_s[r][1]
            dict_s[char] = dict_s.get(char, 0) + 1
            if dict_s[char] == dict_t[char]:
                formed_count += 1
            while l <= r and formed_count == required_count:
                char = filtered_s[l][1]
                end = filtered_s[r][0]
                start = filtered_s[l][0]
                if end - start + 1 < ans[0]:
                    ans = (end - start + 1, start, end)
                dict_s[char] -= 1
                if dict_s[char] < dict_t[char]:
                    formed_count -= 1
                l += 1    
            r += 1    
        return "" if ans[0] == float("inf") else s[ans[1] : ans[2] + 1]