import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        h = [-x for x in stones]
        heapq.heapify(h)
        while len(h) > 1:
            x, y = heapq.heappop(h), heapq.heappop(h)
            if x != y:
                heapq.heappush(h, x - y)
        return 0 if len(h) == 0 else -h[0]
        