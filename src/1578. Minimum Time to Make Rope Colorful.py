class Solution:
    def minCost(self, colors: str, neededTime: List[int]) -> int:
        n = len(colors)
        ans = i = j = 0
        while i < n and j < n:
            max_time = neededTime[i]
            while j < n and colors[i] == colors[j]:
                ans += neededTime[j]
                max_time = max(max_time, neededTime[j])
                j += 1
            ans -= max_time
            i = j
        return ans