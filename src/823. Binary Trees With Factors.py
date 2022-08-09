class Solution:
    def numFactoredBinaryTrees(self, arr: List[int]) -> int:
        map = {}
        mod = 10 ** 9 + 7
        for product in sorted(arr):
            map[product] = 1 + sum(
                map[value] * map.get(product / value, 0)
                for value in arr if value < product
            )
        return sum(map.values()) % mod
